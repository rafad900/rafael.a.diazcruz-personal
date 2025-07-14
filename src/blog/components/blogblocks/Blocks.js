// src/components/blocks/index.js
import HeadingBlock from './HeadingBlock'
import ParagraphBlock from './ParagraphBlock'
import CodeBlock from './CodeBlock'
import LatexBlock from './LatexBlock';
import ListBlock from './ListBlock';
import ImageBlock from './ImageBlock';

// You can also create a map directly here for cleaner rendering
export const BlockComponents = {
  heading: HeadingBlock,
  paragraph: ParagraphBlock,
  code: CodeBlock,
  latex: LatexBlock,
  list: ListBlock,
  image: ImageBlock,
  // Add more block types as you create them
};