const getClass = (className, isMobile) => {
  const mobileClass = isMobile ? className + "--mobile" : null;
  return `${className} ${mobileClass}`;
};

export default getClass;
