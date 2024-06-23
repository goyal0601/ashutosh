import { useResize } from './hooks/useResize';

function UseResizeHook() {
  const deviceValue = useResize();

  const { isMobile, isDesktop, isTablet } = deviceValue;
  return (
    <div>
      <div>
        Resize value: {isMobile && 'Mobile'}
        {isDesktop && 'Desktop'}
        {isTablet && 'Tablet'}
      </div>
    </div>
  );
}

export default UseResizeHook;
