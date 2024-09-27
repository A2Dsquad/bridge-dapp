import type { SVGProps } from "react";
const SvgRocket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 21"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#rocket_svg__a)">
      <path d="m5.587 5.9-1.732.134c-.482.038-.912.29-1.178.694L.678 9.75a1.07 1.07 0 0 0-.086 1.024c.149.335.453.569.816.625l1.586.246c.371-1.97 1.26-3.935 2.593-5.745M9.355 18.005l.245 1.587a1.07 1.07 0 0 0 1.06.908c.206 0 .41-.06.59-.179l3.022-1.998c.403-.267.656-.696.693-1.178l.134-1.733c-1.81 1.334-3.775 2.222-5.744 2.593M8.758 16.906q.082 0 .166-.014c.825-.137 1.62-.37 2.379-.674l-6.52-6.52a11.5 11.5 0 0 0-.675 2.378c-.055.326.054.657.288.89l3.638 3.639c.194.193.455.301.724.301M18.905 9.367c1.596-3.085 1.655-6.345 1.572-7.874a1.027 1.027 0 0 0-.97-.97A16 16 0 0 0 18.63.5c-1.71 0-4.415.259-6.997 1.595C9.58 3.156 6.889 5.494 5.3 8.565q.028.023.055.048l7.03 7.032a1 1 0 0 1 .048.054c3.072-1.588 5.41-4.28 6.471-6.332M12.13 4.728a2.933 2.933 0 0 1 4.143 0A2.9 2.9 0 0 1 17.13 6.8a2.9 2.9 0 0 1-.858 2.071 2.92 2.92 0 0 1-2.072.857c-.75 0-1.5-.286-2.071-.857A2.9 2.9 0 0 1 11.27 6.8c0-.783.304-1.519.858-2.072" />
      <path d="M12.958 8.043a1.76 1.76 0 0 0 3-1.243c0-.47-.183-.911-.515-1.243a1.75 1.75 0 0 0-1.243-.514A1.75 1.75 0 0 0 12.443 6.8c0 .47.183.91.515 1.243M1.098 16.981c.15 0 .3-.057.414-.171l1.913-1.913a.586.586 0 1 0-.828-.829L.684 15.981a.586.586 0 0 0 .414 1M5.178 15.822a.586.586 0 0 0-.828 0L.672 19.5a.586.586 0 0 0 .828.828l3.678-3.677a.586.586 0 0 0 0-.829M6.103 17.574 4.19 19.487a.586.586 0 1 0 .829.829l1.913-1.913a.586.586 0 1 0-.83-.829" />
    </g>
    <defs>
      <clipPath id="rocket_svg__a">
        <path fill="#fff" d="M.5.5h20v20H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRocket;