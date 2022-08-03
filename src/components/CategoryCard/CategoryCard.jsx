import React from "react";

const CategoryCard = ({ image, name, borderColor }) => {
  const hexToRGBA = (borderColor) => {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(borderColor)) {
      c = borderColor.substring(1).split("");
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      return (
        "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",.1)"
      );
    }
  };
  return (
    <div className="flex-none py-6 pr-3 last:pr-6">
      <div
        className={`border-solid border rounded-full px-1 py-1`}
        style={{
          borderColor: borderColor,
        }}
      >
        <div className={`flex flex-col items-center justify-between gap-3 h-32 border-solid border rounded-full px-5 py-4`} style={{ backgroundColor: hexToRGBA(borderColor) }}>
          <img src={image} alt={name} className="w-16 rounded-full" />
          <p className="text-slate-900 text-xs font-medium">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
