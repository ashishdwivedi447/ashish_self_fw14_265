//Complete the Custom Image component based on the props that it expects to receive


export const Image = ({ src, alt, height, width,fit, borderRadius }) => {
  return (
    <img
      alt={alt}
      src={src}
      style={{
        height: height,
        width: width,
        objectFit: fit,
        borderRadius: borderRadius,
      }}
    />
  );
};
