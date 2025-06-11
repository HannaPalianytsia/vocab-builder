const Icon = ({
  id,
  width,
  height,
  className = "",
  fillColor,
  strokeColor,
}) => {
  return (
    <svg
      className={`${className}`}
      width={width}
      height={height}
      aria-hidden="true"
    >
      <use
        style={{
          fill: fillColor,
          stroke: strokeColor,
        }}
        href={`/icons/sprite.svg#${id}`}
      ></use>
    </svg>
  );
};

export default Icon;
