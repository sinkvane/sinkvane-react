export function Icon({ name, width = 24, height = 24, className = '' }) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
    >
      <use
        href={`#icon-${name}`}
      />
    </svg >
  );
};
