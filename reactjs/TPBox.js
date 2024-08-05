import React, { useMemo } from 'react';
import './TPBox.css';

export const TPBox = React.forwardRef(({
  className,
  style,
  block,
  inlineBlock,
  inline,
  divTable, dt,
  divTableRow, dtRow,
  divTableCell, dtCell,
  divTableHead, dtHead,
  divTableBody, dtBody,
  divTableFoot, dtFoot,
  row,
  column, col,
  textAlign, ta,
  textAlignCenter, taCenter,
  textAlignLeft, taLeft,
  textAlignRight, taRight,
  verticalAlign, va,
  verticalAlignMiddle, vaMiddle,
  verticalAlignTop, vaTop,
  verticalAlignBottom, vaBottom,
  alignStart, aStart,
  alignCenter, aCenter,
  alignEnd, aEnd,
  alignStretch, aStretch,
  justifyStart, jStart,
  justifyEnd, jEnd,
  justifyCenter, jCenter,
  justifySpaceBetween, jSpaceBetween,
  justifySpaceAround, jSpaceAround,
  justifyStretch, jStretch,
  padding, p,
  paddingHorizontal, ph,
  paddingVertical, pv,
  paddingTop, pt,
  paddingBottom, pb,
  paddingLeft, pl,
  paddingRight, pr,
  margin, m,
  marginHorizontal, mh,
  marginVertical, mv,
  marginTop, mt,
  marginBottom, mb,
  marginLeft, ml,
  marginRight, mr,
  width, w,
  height, h,
  widthfull, wfull,
  heightfull, hfull,
  widthfullview, wfullv,
  heightfullview, hfullv,
  minWidth, minW,
  minHeight, minH,
  maxWidth, maxW,
  maxHeight, maxH,
  flex,
  gap,
  children,
  img,
  src,
  onLoad,
  scrollView,
  scrollAuto,
  overflowHidden, o_hidden,
  overflowVisible, o_visible,
  overflowScroll, o_scroll,
  overflowAuto, o_auto,
  overflowXHidden, ox_hidden,
  overflowXVisible, ox_visible,
  overflowXScroll, ox_scroll,
  overflowXAuto, ox_auto,
  overflowYHidden, oy_hidden,
  overflowYVisible, oy_visible,
  overflowYScroll, oy_scroll,
  overflowYAuto, oy_auto,
  relative, rel,
  absolute, abs,
  fixed,
  top, t,
  bottom, b,
  left, l,
  right, r,
  transform,
  transition,
  transitionSec,
  fontSize,
  fontFamily,
  opacity,
  pointerEvents,
  pointerEventsNone,
  background, bg,
  color,
  pre,
  border,
  borderRadius,
  isHidden,
  isHiddenForLargeScreen,
  isHiddenForMediumScreen,
  isHiddenForSmallScreen,
  ...otherProps
}, ref) => {

  const __styles = useMemo(() => {
    return makeStyle()
  }, [
    className,
    style,
    block,
    inlineBlock,
    inline,
    divTable, dt,
    divTableRow, dtRow,
    divTableCell, dtCell,
    divTableHead, dtHead,
    divTableBody, dtBody,
    divTableFoot, dtFoot,
    row,
    column, col,
    textAlign, ta,
    textAlignCenter, taCenter,
    textAlignLeft, taLeft,
    textAlignRight, taRight,
    verticalAlign, va,
    verticalAlignMiddle, vaMiddle,
    verticalAlignTop, vaTop,
    verticalAlignBottom, vaBottom,
    alignStart, aStart,
    alignCenter, aCenter,
    alignEnd, aEnd,
    alignStretch, aStretch,
    justifyStart, jStart,
    justifyEnd, jEnd,
    justifyCenter, jCenter,
    justifySpaceBetween, jSpaceBetween,
    justifySpaceAround, jSpaceAround,
    justifyStretch, jStretch,
    padding, p,
    paddingHorizontal, ph,
    paddingVertical, pv,
    paddingTop, pt,
    paddingBottom, pb,
    paddingLeft, pl,
    paddingRight, pr,
    margin, m,
    marginHorizontal, mh,
    marginVertical, mv,
    marginTop, mt,
    marginBottom, mb,
    marginLeft, ml,
    marginRight, mr,
    width, w,
    height, h,
    widthfull, wfull,
    heightfull, hfull,
    widthfullview, wfullv,
    heightfullview, hfullv,
    minWidth, minW,
    minHeight, minH,
    maxWidth, maxW,
    maxHeight, maxH,
    flex,
    gap,
    children,
    img,
    src,
    onLoad,
    scrollView,
    scrollAuto,
    overflowHidden, o_hidden,
    overflowVisible, o_visible,
    overflowScroll, o_scroll,
    overflowAuto, o_auto,
    overflowXHidden, ox_hidden,
    overflowXVisible, ox_visible,
    overflowXScroll, ox_scroll,
    overflowXAuto, ox_auto,
    overflowYHidden, oy_hidden,
    overflowYVisible, oy_visible,
    overflowYScroll, oy_scroll,
    overflowYAuto, oy_auto,
    relative, rel,
    absolute, abs,
    fixed,
    top, t,
    bottom, b,
    left, l,
    right, r,
    transform,
    transition,
    transitionSec,
    fontSize,
    fontFamily,
    opacity,
    pointerEvents,
    pointerEventsNone,
    background, bg,
    color,
    pre,
    border,
    borderRadius,
    isHidden,
    isHiddenForLargeScreen,
    isHiddenForMediumScreen,
    isHiddenForSmallScreen,
  ])

  const makeStyle = () => {

    var __input_styles = {
      display: `flex`,
      flexDirection: `column`,
      ...style,
    };
  
  
    if (pre) {
      __input_styles.whiteSpace = `pre-wrap`;
      __input_styles.fontFamily = `monospace`;
      __input_styles.overflowX = `auto`;
      __input_styles.overflowWrap = `break-word`;
    }
  
  
    if (block) {
      __input_styles.display = `block`;
    }
  
    else if (inlineBlock) {
      __input_styles.display = `inline-block`;
    }
  
    else if (inline) {
      __input_styles.display = `inline`;
    }
  
  
    else if (dt || divTable) {
      __input_styles.display = `table`
    }
    else if (dtRow || divTableRow) {
      __input_styles.display = `table-row`
    }
    else if (dtCell || divTableCell) {
      __input_styles.display = `table-cell`
    }
    else if (dtHead || divTableHead) {
      __input_styles.display = `table-header-group`
    }
    else if (dtBody || divTableBody) {
      __input_styles.display = `table-row-group`
    }
    else if (dtFoot || divTableFoot) {
      __input_styles.display = `table-footer-group`
    }
  
    if (row) {
      __input_styles.flexDirection = `row`;
    }
    else if (col || column) {
      __input_styles.flexDirection = `column`;
    }

    
    textAlign = ta || textAlign

    if (textAlign) {
      __input_styles.textAlign = textAlign;
    }
    else if (taCenter || textAlignCenter) {
      __input_styles.textAlign = `center`;
    }
    else if (taLeft || textAlignLeft) {
      __input_styles.textAlign = `left`;
    }
    else if (taRight || textAlignRight) {
      __input_styles.textAlign = `right`;
    }

    
    verticalAlign = va || verticalAlign
    
    if (verticalAlign) {
      __input_styles.verticalAlign = verticalAlign;
    }
    else if (vaMiddle || verticalAlignMiddle) {
      __input_styles.verticalAlign = `middle`;
    }
    else if (vaTop || verticalAlignTop) {
      __input_styles.verticalAlign = `top`;
    }
    else if (vaBottom || verticalAlignBottom) {
      __input_styles.verticalAlign = `bottom`;
    }
  
  
    if (aStart || alignStart) {
      __input_styles.alignItems = `flex-start`;
    }
    else if (aCenter || alignCenter) {
      __input_styles.alignItems = `center`;
    }
    else if (aStretch || alignStretch) {
      __input_styles.alignItems = `stretch`;
    }
    else if (aEnd || alignEnd) {
      __input_styles.alignItems = `flex-end`;
    }
  
    if (jStart || justifyStart) {
      __input_styles.justifyContent = `flex-start`;
    }
    else if (jEnd || justifyEnd) {
      __input_styles.justifyContent = `flex-end`;
    }
    else if (jCenter || justifyCenter) {
      __input_styles.justifyContent = `center`;
    }
    else if (jStretch || justifyStretch) {
      __input_styles.justifyContent = `stretch`;
    }
    else if (jSpaceBetween || justifySpaceBetween) {
      __input_styles.justifyContent = `space-between`;
    }
    else if (jSpaceAround || justifySpaceAround) {
      __input_styles.justifyContent = `space-around`;
    }
  
    if (flex) {
      __input_styles.flex = flex;
    }
  
    if (gap) {
      __input_styles.gap = gap;
    }
  
    p = (p !== null && p !== undefined) ? p : ((padding !== null && padding !== undefined) ? padding : p)
    ph = (ph !== null && ph !== undefined) ? ph : ((paddingHorizontal !== null && paddingHorizontal !== undefined) ? paddingHorizontal : ph)
    pv = (pv !== null && pv !== undefined) ? pv : ((paddingVertical !== null && paddingVertical !== undefined) ? paddingVertical : pv)
    pt = (pt !== null && pt !== undefined) ? pt : ((paddingTop !== null && paddingTop !== undefined) ? paddingTop : pt)
    pb = (pb !== null && pb !== undefined) ? pb : ((paddingBottom !== null && paddingBottom !== undefined) ? paddingBottom : pb)
    pl = (pl !== null && pl !== undefined) ? pl : ((paddingLeft !== null && paddingLeft !== undefined) ? paddingLeft : pl)
    pr = (pr !== null && pr !== undefined) ? pr : ((paddingRight !== null && paddingRight !== undefined) ? paddingRight : pr)
  
    padding = p
    paddingHorizontal = ph
    paddingVertical = pv
    paddingTop = pt
    paddingBottom = pb
    paddingLeft = pl
    paddingRight = pr
  
    if (padding !== null && padding !== undefined) {
      __input_styles.padding = padding;
      __input_styles.padding = padding;
    }
  
    if (paddingHorizontal !== null && paddingHorizontal !== undefined) {
      __input_styles.paddingLeft = paddingHorizontal;
      __input_styles.paddingRight = paddingHorizontal;
    }
  
    if (paddingVertical !== null && paddingVertical !== undefined) {
      __input_styles.paddingTop = paddingVertical;
      __input_styles.paddingBottom = paddingVertical;
    }
  
    if (paddingTop !== null && paddingTop !== undefined) {
      __input_styles.paddingTop = paddingTop;
    }
  
    if (paddingBottom !== null && paddingBottom !== undefined) {
      __input_styles.paddingBottom = paddingBottom;
    }
  
    if (paddingLeft !== null && paddingLeft !== undefined) {
      __input_styles.paddingLeft = paddingLeft;
    }
  
    if (paddingRight !== null && paddingRight !== undefined) {
      __input_styles.paddingRight = paddingRight;
    }
  
    m = (m !== null && m !== undefined) ? m : ((margin !== null && margin !== undefined) ? margin : m)
    mh = (mh !== null && mh !== undefined) ? mh : ((marginHorizontal !== null && marginHorizontal !== undefined) ? marginHorizontal : mh)
    mv = (mv !== null && mv !== undefined) ? mv : ((marginVertical !== null && marginVertical !== undefined) ? marginVertical : mv)
    mt = (mt !== null && mt !== undefined) ? mt : ((marginTop !== null && marginTop !== undefined) ? marginTop : mt)
    mb = (mb !== null && mb !== undefined) ? mb : ((marginBottom !== null && marginBottom !== undefined) ? marginBottom : mb)
    ml = (ml !== null && ml !== undefined) ? ml : ((marginLeft !== null && marginLeft !== undefined) ? marginLeft : ml)
    mr = (mr !== null && mr !== undefined) ? mr : ((marginRight !== null && marginRight !== undefined) ? marginRight : mr)
  
    margin = m
    marginHorizontal = mh
    marginVertical = mv
    marginTop = mt
    marginBottom = mb
    marginLeft = ml
    marginRight = mr
  
    if (margin !== null && margin !== undefined) {
      __input_styles.margin = margin;
      __input_styles.margin = margin;
    }
  
    if (marginHorizontal !== null && marginHorizontal !== undefined) {
      __input_styles.marginLeft = marginHorizontal;
      __input_styles.marginRight = marginHorizontal;
    }
  
    if (marginVertical !== null && marginVertical !== undefined) {
      __input_styles.marginTop = marginVertical;
      __input_styles.marginBottom = marginVertical;
    }
  
    if (marginTop !== null && marginTop !== undefined) {
      __input_styles.marginTop = marginTop;
    }
  
    if (marginBottom !== null && marginBottom !== undefined) {
      __input_styles.marginBottom = marginBottom;
    }
  
    if (marginLeft !== null && marginLeft !== undefined) {
      __input_styles.marginLeft = marginLeft;
    }
  
    if (marginRight !== null && marginRight !== undefined) {
      __input_styles.marginRight = marginRight;
    }
  
    w = (w !== null && w !== undefined) ? w : ((width !== null && width !== undefined) ? width : w)
    h = (h !== null && h !== undefined) ? h : ((height !== null && height !== undefined) ? height : h)
  
    width = w
    height = h
  
    if (width) {
      __input_styles.width = width;
    }
    if (height) {
      __input_styles.height = height;
    }
  
    if (wfull || widthfull) {
      __input_styles.width = `100%`;
    }
    else if (wfullv || widthfullview) {
      __input_styles.width = `100vw`;
    }
    if (hfull || heightfull) {
      __input_styles.height = `100%`;
    }
    else if (hfullv || heightfullview) {
      __input_styles.height = `100vh`;
    }
  
    minW = (minW !== null && minW !== undefined) ? minW : ((minWidth !== null && minWidth !== undefined) ? minWidth : minW)
    minH = (minH !== null && minH !== undefined) ? minH : ((minHeight !== null && minHeight !== undefined) ? minHeight : minH)
  
    minWidth = minW
    minHeight = minH
  
    if (minWidth) {
      __input_styles.minWidth = minWidth;
    }
    if (minHeight) {
      __input_styles.minHeight = minHeight;
    }
  
    maxW = (maxW !== null && maxW !== undefined) ? maxW : ((maxWidth !== null && maxWidth !== undefined) ? maxWidth : maxW)
    maxH = (maxH !== null && maxH !== undefined) ? maxH : ((maxHeight !== null && maxHeight !== undefined) ? maxHeight : maxH)
  
    maxWidth = maxW
    maxHeight = maxH
  
    if (maxWidth) {
      __input_styles.maxWidth = maxWidth;
    }
    if (maxHeight) {
      __input_styles.maxHeight = maxHeight;
    }
  
    if (scrollView) {
      __input_styles.overflow = 'scroll'
    }
    else if (scrollAuto) {
      __input_styles.overflow = 'auto'
    }
  
    if (overflowHidden || o_hidden) {
      __input_styles.overflow = 'hidden'
    }
    else if (overflowVisible || o_visible) {
      __input_styles.overflow = 'visible'
    }
    else if (overflowScroll || o_scroll) {
      __input_styles.overflow = 'scroll'
    }
    else if (overflowAuto || o_auto) {
      __input_styles.overflow = 'auto'
    }
  
    if (overflowXHidden || ox_hidden) {
      __input_styles.overflowX = 'hidden'
    }
    else if (overflowXVisible || ox_visible) {
      __input_styles.overflowX = 'visible'
    }
    else if (overflowXScroll || ox_scroll) {
      __input_styles.overflowX = 'scroll'
    }
    else if (overflowXAuto || ox_auto) {
      __input_styles.overflowX = 'auto'
    }
  
    if (overflowYHidden || oy_hidden) {
      __input_styles.overflowY = 'hidden'
    }
    else if (overflowYVisible || oy_visible) {
      __input_styles.overflowY = 'visible'
    }
    else if (overflowYScroll || oy_scroll) {
      __input_styles.overflowY = 'scroll'
    }
    else if (overflowYAuto || oy_auto) {
      __input_styles.overflowY = 'auto'
    }
  
    if (relative || rel) {
      __input_styles.position = 'relative'
    }
    else if (absolute || abs) {
      __input_styles.position = 'absolute'
    }
    else if (fixed) {
      __input_styles.position = 'fixed'
    }
  
    t = (t !== null && t !== undefined) ? t : ((top !== null && top !== undefined) ? top : t)
    b = (b !== null && b !== undefined) ? b : ((bottom !== null && bottom !== undefined) ? bottom : b)
    l = (l !== null && l !== undefined) ? l : ((left !== null && left !== undefined) ? left : l)
    r = (r !== null && r !== undefined) ? r : ((right !== null && right !== undefined) ? right : r)
  
    if (t !== null && t !== undefined) {
      __input_styles.top = t
    }
    if (b !== null && b !== undefined) {
      __input_styles.bottom = b
    }
    if (l !== null && l !== undefined) {
      __input_styles.left = l
    }
    if (r !== null && r !== undefined) {
      __input_styles.right = r
    }
  
    if (transform) {
      __input_styles.transform = transform
    }
  
    if (opacity !== null && opacity !== undefined) {
      __input_styles.opacity = opacity
    }
  
  
    if (pointerEventsNone) {
      __input_styles.pointerEvents = `none`
    } else if (pointerEvents) {
      __input_styles.pointerEvents = pointerEvents
    }
  
    if (transition || transitionSec) {
      transition = transition || true
      __input_styles.transition = `${transition === true ? `all` : transition} ${transitionSec || 1}s`
    }
  
    bg = bg || background
  
    if (bg) {
      __input_styles.background = bg
    }
  
    if (color) {
      __input_styles.color = color
    }
  
    if (border) {
      __input_styles.border = border
    }
  
    if (borderRadius !== null && borderRadius !== undefined) {
      __input_styles.borderRadius = borderRadius
    }
  
    if (fontSize !== null && fontSize !== undefined) {
      __input_styles.fontSize = fontSize
    }
    if (fontFamily) {
      __input_styles.fontFamily = fontFamily
    }
  
    if (isHidden) {
      __input_styles.display = `none`;
    }
  

    return __input_styles
  }


  if (isHiddenForLargeScreen) {
    classNames += ` tpbox-responsive-hide-for-large-screen `
  }
  if (isHiddenForMediumScreen) {
    classNames += ` tpbox-responsive-hide-for-medium-screen `
  }
  if (isHiddenForSmallScreen) {
    classNames += ` tpbox-responsive-hide-for-small-screen `
  }

  var classNames = className || "";

  if (img) {
    return (
      <img {...otherProps} ref={ref} className={classNames} style={__styles} src={src} alt={children} onLoad={onLoad} />
    )
  }


  return (
    <div {...otherProps} ref={ref} className={classNames} style={__styles} >
      {children}
    </div>
  )
})
