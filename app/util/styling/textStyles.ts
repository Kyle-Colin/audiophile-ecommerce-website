function textStyles(variant: "base" | "label") {
    switch (variant) {
        default:
            return "text-[15px] leading-[25px]"
        case "label":
            return "text-[#D87D4A] text-[14px] leading-[19px] tracking-[10px]"
    }
}

export default textStyles;