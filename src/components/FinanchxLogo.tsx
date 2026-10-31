import Image from "next/image";

interface FinanchxLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const wordmarkWidth = {
  sm: "w-32",
  md: "w-40",
  lg: "w-52",
} as const;

const symbolWidth = {
  sm: "w-6",
  md: "w-7",
  lg: "w-9",
} as const;

export function FinanchxLogo({
  className = "",
  showText = true,
  size = "md",
}: FinanchxLogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <Image
        src={
          showText
            ? "/logos/financhx_horizontal_blanco.png"
            : "/logos/financhx_simbolo_blanco.png"
        }
        alt={
          showText
            ? "Financhx — Financial Operating System"
            : "Financhx"
        }
        width={showText ? 2463 : 444}
        height={showText ? 723 : 558}
        sizes={showText ? "(max-width: 640px) 128px, 208px" : "36px"}
        className={`h-auto ${showText ? wordmarkWidth[size] : symbolWidth[size]}`}
      />
    </div>
  );
}
