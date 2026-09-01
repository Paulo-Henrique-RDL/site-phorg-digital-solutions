import { useEffect, useState } from "react";

interface MatrixColumn {
  id: number;
  chars: string[];
  x: number;
  speed: number;
  opacity: number;
}

const MatrixRain = () => {
  const [columns, setColumns] = useState<MatrixColumn[]>([]);

  useEffect(() => {
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const columnCount = 20;
    
    const generateColumn = (id: number, side: "left" | "right"): MatrixColumn => {
      const charCount = Math.floor(Math.random() * 15) + 8;
      const columnChars = Array.from({ length: charCount }, () => 
        chars[Math.floor(Math.random() * chars.length)]
      );
      
      // Position columns on left (0-15%) or right (85-100%) of screen
      const x = side === "left" 
        ? Math.random() * 12 
        : 88 + Math.random() * 12;
      
      return {
        id,
        chars: columnChars,
        x,
        speed: Math.random() * 3 + 2,
        opacity: Math.random() * 0.4 + 0.2,
      };
    };

    const initialColumns: MatrixColumn[] = [];
    for (let i = 0; i < columnCount; i++) {
      const side = i < columnCount / 2 ? "left" : "right";
      initialColumns.push(generateColumn(i, side as "left" | "right"));
    }
    setColumns(initialColumns);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Left fade mask */}
      <div className="absolute left-0 top-0 bottom-0 w-[20%] bg-gradient-to-r from-transparent via-transparent to-background z-10" />
      
      {/* Right fade mask */}
      <div className="absolute right-0 top-0 bottom-0 w-[20%] bg-gradient-to-l from-transparent via-transparent to-background z-10" />

      {columns.map((column) => (
        <div
          key={column.id}
          className="absolute top-0 font-mono text-xs md:text-sm animate-matrix-fall"
          style={{
            left: `${column.x}%`,
            animationDuration: `${column.speed}s`,
            opacity: column.opacity,
          }}
        >
          {column.chars.map((char, i) => (
            <div
              key={i}
              className="text-primary leading-tight"
              style={{
                opacity: 1 - (i / column.chars.length) * 0.7,
                textShadow: i === 0 ? "0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary))" : "none",
              }}
            >
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixRain;
