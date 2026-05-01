export const paperStyles = {
  p: { xs: 2, sm: 4 },
  my: { xs: 2, sm: 4 },
  borderRadius: 2,
  backgroundColor: 'transparent',
};

export const headerBoxStyles = {
  display: 'flex',
  alignItems: 'baseline',
  gap: 1,
};

export const rightGridStyles = {
  textAlign: { xs: 'left', sm: 'right' },
};

export const descriptionBoxStyles = { mb: 2 };

export const listItemStyles = { pl: 0, py: 0.5 };

export const achievementChipStyles = { mr: 1 };

export const timelineIconStyles = {
  width: 48,
  height: 48,
  borderRadius: '50%',
  bgcolor: 'primary.main',
  color: 'primary.contrastText',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 3,
};

export const achievementIconStyles = { fontSize: 18, color: 'primary.main' };

const experienceStyles = {
  paperStyles,
  headerBoxStyles,
  rightGridStyles,
  descriptionBoxStyles,
  listItemStyles,
  achievementChipStyles,
  timelineIconStyles,
  achievementIconStyles,
};

export default experienceStyles;
