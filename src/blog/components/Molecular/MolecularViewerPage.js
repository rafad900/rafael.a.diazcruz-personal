import React, { useEffect, useRef, useState } from 'react';
import { Box, CircularProgress, Typography, Alert } from '@mui/material';
import '3dmol'; // Import 3Dmol.js

function MolecularViewerPage() {
  // Ref to the div element where 3Dmol.js will render the viewer
  const viewerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [moleculeData, setMoleculeData] = useState(null); // State to store fetched molecule data

  const moleculeUrl = "http://localhost:3000/rafael.a.diazcruz-personal/8HEX.cif"
  const moleculeName = "C5 portal vertex in HCMV B-capsid"

  useEffect(() => {
    const fetchMoleculeContent = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(moleculeUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.text(); // Get the response as plain text
        setMoleculeData(data); // Store the text content
      } catch (err) {
        console.error("Error fetching molecule content:", err);
        setError(`Failed to fetch molecule: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMoleculeContent();
  }, [moleculeUrl]); // Re-fetch if the URL changes

  useEffect(() => {
    let viewer = null; // Declare viewer here to be accessible in cleanup
    const $3Dmol = window.$3Dmol; // This accesses the global object it creates

    const initializeViewer = () => {
      if (viewerRef.current) {
        try {
          // Create the 3Dmol.js viewer instance
          // The first argument is the DOM element or its ID
          viewer = $3Dmol.createViewer(viewerRef.current, {
            defaultcolors: $3Dmol.elementColors.smol,
          });

          // Add the molecule from SMILES string
          viewer.addModel(moleculeData, "cif");

          // Apply common styles: sphere for atoms, stick for bonds
          viewer.setStyle({}, { sphere: { radius: 0.5 }, stick: { radius: 0.2 } });

          // Zoom to fit the molecule in the view
          viewer.zoomTo();

          // Render the scene
          viewer.render();

          setLoading(false);
        } catch (e) {
          console.error("Error initializing 3Dmol.js viewer:", e);
          setError("Failed to load molecular structure.");
          setLoading(false);
        }
      }
    };

    initializeViewer();

    // Cleanup function: destroy the viewer when the component unmounts
    return () => {
      if (viewer) {
        viewer = null;
      }
    };
  }, [moleculeData]); // Empty dependency array means this runs once on mount

  return (
    <Box
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh', // Ensure enough height for the viewer
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(256, 256, 256, 0.4)',
        mx: 'auto', // Center horizontally
        maxWidth: '900px' // Limit width for better layout
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom sx={{ }}>
        3D Molecular Viewer: {moleculeName}
      </Typography>

      {loading && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
          <CircularProgress />
          <Typography variant="body1" sx={{ mt: 2 }}>Loading 3D structure...</Typography>
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mt: 4 }}>{error}</Alert>
      )}

      <Box
        ref={viewerRef}
        sx={{
          width: '100%',
          height: '500px', // Fixed height for the viewer
          border: '3px solid red',
          borderColor: 'divider',
          borderRadius: '4px',
          overflow: 'hidden', // Hide any overflow
          display: loading || error ? 'none' : 'block', // Hide if loading or error
          position: 'relative'
        }}
      />
      <Typography variant="body2" color="text.secondary" sx={{ mt: 3, fontSize: '1.2rem' }}>
        Explore the 3D structure by dragging, scrolling, and right-clicking.
      </Typography>
    </Box>
  );
}

export default MolecularViewerPage;