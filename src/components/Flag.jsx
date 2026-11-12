// Simplified, hand-drawn SVG flags (3:2). Decorative: the country name is
// always shown as text next to them.
const FLAGS = {
  CA: (
    <>
      <rect width="30" height="20" fill="#fff" />
      <rect width="7.5" height="20" fill="#D52B1E" />
      <rect x="22.5" width="7.5" height="20" fill="#D52B1E" />
      <path
        fill="#D52B1E"
        d="M15 4.2l1 2.3 1.7-.6-.6 3.1 2-1.2-.3 1.7 1.6.6-2.9 2.3.4.9-2.2-.4v2.7h-1.4v-2.7l-2.2.4.4-.9-2.9-2.3 1.6-.6-.3-1.7 2 1.2-.6-3.1 1.7.6z"
      />
    </>
  ),
  US: (
    <>
      <rect width="30" height="20" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 20) / 13} width="30" height={20 / 13} fill="#B22234" />
      ))}
      <rect width="13" height={(20 * 7) / 13} fill="#3C3B6E" />
      {[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => (
        <circle key={`${r}${c}`} cx={2 + c * 3} cy={2 + r * 3} r=".6" fill="#fff" />
      )))}
    </>
  ),
  UK: <UnionFlag />,
  EU: (
    <>
      <rect width="30" height="20" fill="#003399" />
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i * Math.PI) / 6;
        return <circle key={i} cx={(15 + 6 * Math.sin(a)).toFixed(2)} cy={(10 - 6 * Math.cos(a)).toFixed(2)} r=".85" fill="#FFCC00" />;
      })}
    </>
  ),
  AE: (
    <>
      <rect width="30" height="6.67" fill="#00843D" />
      <rect y="6.67" width="30" height="6.67" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#000" />
      <rect width="8" height="20" fill="#EF3340" />
    </>
  ),
  AU: (
    <>
      <rect width="30" height="20" fill="#012169" />
      <g transform="scale(.5)"><UnionFlag /></g>
      <circle cx="7.5" cy="15" r="1.6" fill="#fff" />
      <circle cx="22.5" cy="4" r=".9" fill="#fff" />
      <circle cx="25.5" cy="8.5" r=".9" fill="#fff" />
      <circle cx="20" cy="9.5" r=".9" fill="#fff" />
      <circle cx="22.5" cy="16" r=".9" fill="#fff" />
      <circle cx="24.3" cy="11.8" r=".5" fill="#fff" />
    </>
  ),
};

function UnionFlag() {
  return (
    <>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#C8102E" strokeWidth="1.4" />
      <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0v20M0 10h30" stroke="#C8102E" strokeWidth="3.4" />
    </>
  );
}

export default function Flag({ code }) {
  return (
    <svg className="flag" viewBox="0 0 30 20" width="30" height="20" aria-hidden="true" focusable="false">
      {FLAGS[code]}
    </svg>
  );
}
