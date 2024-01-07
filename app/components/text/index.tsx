import React from 'react';
import textStyles from '@/app/util/styling/textStyles';

interface TextProps {
    children: React.ReactNode
    variant?: "base" | "label"
}

const Text = ({ variant="base", children }: TextProps) => {
  return (
    <p className={textStyles(variant)}>{children}</p>
  )
}

export default Text;
