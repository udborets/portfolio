function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function ShowWindowDimensions() {
  const [width, height] = useWindowSize();
  if(width<1280) {
    console.log("lower!")
    console.log(width, height)
  }
}
ShowWindowDimensions()