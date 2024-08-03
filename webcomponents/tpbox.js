
class TPBox extends HTMLElement {
  static attributeToStyleMapping = {
    'class-name': { affectedKeys: ['CLASSNAME'], },

    'block': { affectedKeys: ['display'], },
    'inline-block': { affectedKeys: ['display'], },
    'inline': { affectedKeys: ['display'], },
    'div-table': { affectedKeys: ['display'], },
    'dt': { affectedKeys: ['display'], },
    'div-table-row': { affectedKeys: ['display'], },
    'dt-row': { affectedKeys: ['display'], },
    'div-table-cell': { affectedKeys: ['display'], },
    'dt-cell': { affectedKeys: ['display'], },
    'div-table-head': { affectedKeys: ['display'], },
    'dt-head': { affectedKeys: ['display'], },
    'div-table-body': { affectedKeys: ['display'], },
    'dt-body': { affectedKeys: ['display'], },
    'div-table-foot': { affectedKeys: ['display'], },
    'dt-foot': { affectedKeys: ['display'], },

    'row': { affectedKeys: ['flex-direction'], },
    'column': { affectedKeys: ['flex-direction'], },
    'col': { affectedKeys: ['flex-direction'], },

    'text-align': { affectedKeys: ['text-align'], },
    'ta': { affectedKeys: ['text-align'], },
    'text-align-center': { affectedKeys: ['text-align'], },
    'ta-center': { affectedKeys: ['text-align'], },
    'text-align-left': { affectedKeys: ['text-align'], },
    'ta-left': { affectedKeys: ['text-align'], },
    'text-align-right': { affectedKeys: ['text-align'], },
    'ta-right': { affectedKeys: ['text-align'], },

    'vertical-align': { affectedKeys: ['vertical-align'], },
    'va': { affectedKeys: ['vertical-align'], },
    'vertical-align-middle': { affectedKeys: ['vertical-align'], },
    'va-middle': { affectedKeys: ['vertical-align'], },
    'vertical-align-top': { affectedKeys: ['vertical-align'], },
    'va-top': { affectedKeys: ['vertical-align'], },
    'vertical-align-bottom': { affectedKeys: ['vertical-align'], },
    'va-bottom': { affectedKeys: ['vertical-align'], },

    'align-start': { affectedKeys: ['align-items'], },
    'a-start': { affectedKeys: ['align-items'], },
    'align-center': { affectedKeys: ['align-items'], },
    'a-center': { affectedKeys: ['align-items'], },
    'align-end': { affectedKeys: ['align-items'], },
    'a-end': { affectedKeys: ['align-items'], },
    'align-stretch': { affectedKeys: ['align-items'], },
    'a-stretch': { affectedKeys: ['align-items'], },

    'justify-start': { affectedKeys: ['justify-content'], },
    'j-start': { affectedKeys: ['justify-content'], },
    'justify-end': { affectedKeys: ['justify-content'], },
    'j-end': { affectedKeys: ['justify-content'], },
    'justify-center': { affectedKeys: ['justify-content'], },
    'j-center': { affectedKeys: ['justify-content'], },
    'justify-space-between': { affectedKeys: ['justify-content'], },
    'j-space-between': { affectedKeys: ['justify-content'], },
    'justify-space-around': { affectedKeys: ['justify-content'], },
    'j-space-around': { affectedKeys: ['justify-content'], },
    'justify-stretch': { affectedKeys: ['justify-content'], },
    'j-stretch': { affectedKeys: ['justify-content'], },

    'padding': { affectedKeys: ['padding'], },
    'p': { affectedKeys: ['padding'], },
    'padding-horizontal': { affectedKeys: ['padding-left', 'padding-right'], },
    'ph': { affectedKeys: ['padding-left', 'padding-right'], },
    'padding-vertical': { affectedKeys: ['padding-top', 'padding-bottom'], },
    'pv': { affectedKeys: ['padding-top', 'padding-bottom'], },
    'padding-top': { affectedKeys: ['padding-top'], },
    'pt': { affectedKeys: ['padding-top'], },
    'padding-bottom': { affectedKeys: ['padding-bottom'], },
    'pb': { affectedKeys: ['padding-bottom'], },
    'padding-left': { affectedKeys: ['padding-left'], },
    'pl': { affectedKeys: ['padding-left'], },
    'padding-right': { affectedKeys: ['padding-right'], },
    'pr': { affectedKeys: ['padding-right'], },

    'margin': { affectedKeys: ['margin'], },
    'm': { affectedKeys: ['margin'], },
    'margin-horizontal': { affectedKeys: ['margin-left', 'margin-right'], },
    'mh': { affectedKeys: ['margin-left', 'margin-right'], },
    'margin-vertical': { affectedKeys: ['margin-top', 'margin-bottom'], },
    'mv': { affectedKeys: ['margin-top', 'margin-bottom'], },
    'margin-top': { affectedKeys: ['margin-top'], },
    'mt': { affectedKeys: ['margin-top'], },
    'margin-bottom': { affectedKeys: ['margin-bottom'], },
    'mb': { affectedKeys: ['margin-bottom'], },
    'margin-left': { affectedKeys: ['margin-left'], },
    'ml': { affectedKeys: ['margin-left'], },
    'margin-right': { affectedKeys: ['margin-right'], },
    'mr': { affectedKeys: ['margin-right'], },
    
    'width': { affectedKeys: ['width'], },
    'w': { affectedKeys: ['width'], },
    'height': { affectedKeys: ['height'], },
    'h': { affectedKeys: ['height'], },
    'widthfull': { affectedKeys: ['width'], },
    'wfull': { affectedKeys: ['width'], },
    'heightfull': { affectedKeys: ['height'], },
    'hfull': { affectedKeys: ['height'], },
    'widthfullview': { affectedKeys: ['width'], },
    'wfullv': { affectedKeys: ['width'], },
    'heightfullview': { affectedKeys: ['height'], },
    'hfullv': { affectedKeys: ['height'], },

    'min-width': { affectedKeys: ['min-width'], },
    'min-w': { affectedKeys: ['min-width'], },
    'min-height': { affectedKeys: ['min-height'], },
    'min-h': { affectedKeys: ['min-height'], },

    'max-width': { affectedKeys: ['max-width'], },
    'max-w': { affectedKeys: ['max-width'], },
    'max-height': { affectedKeys: ['max-height'], },
    'max-h': { affectedKeys: ['max-height'], },

    'flex': { affectedKeys: ['flex'], },
    
    'gap': { affectedKeys: ['gap'], },

    'overflow-hidden': { affectedKeys: ['overflow'], },
    'o-hidden': { affectedKeys: ['overflow'], },
    'overflow-visible': { affectedKeys: ['overflow'], },
    'o-visible': { affectedKeys: ['overflow'], },
    'overflow-scroll': { affectedKeys: ['overflow'], },
    'o-scroll': { affectedKeys: ['overflow'], },
    'overflow-auto': { affectedKeys: ['overflow'], },
    'o-auto': { affectedKeys: ['overflow'], },

    'overflow-x-hidden': { affectedKeys: ['overflow-x'], },
    'ox-hidden': { affectedKeys: ['overflow-x'], },
    'overflow-x-visible': { affectedKeys: ['overflow-x'], },
    'ox-visible': { affectedKeys: ['overflow-x'], },
    'overflow-x-scroll': { affectedKeys: ['overflow-x'], },
    'ox-scroll': { affectedKeys: ['overflow-x'], },
    'overflow-x-auto': { affectedKeys: ['overflow-x'], },
    'ox-auto': { affectedKeys: ['overflow-x'], },

    'overflow-y-hidden': { affectedKeys: ['overflow-y'], },
    'oy-hidden': { affectedKeys: ['overflow-y'], },
    'overflow-y-visible': { affectedKeys: ['overflow-y'], },
    'oy-visible': { affectedKeys: ['overflow-y'], },
    'overflow-y-scroll': { affectedKeys: ['overflow-y'], },
    'oy-scroll': { affectedKeys: ['overflow-y'], },
    'overflow-y-auto': { affectedKeys: ['overflow-y'], },
    'oy-auto': { affectedKeys: ['overflow-y'], },

    'relative': { affectedKeys: ['position'], },
    'rel': { affectedKeys: ['position'], },
    'absolute': { affectedKeys: ['position'], },
    'abs': { affectedKeys: ['position'], },
    'fixed': { affectedKeys: ['position'], },

    'top': { affectedKeys: ['top'], },
    't': { affectedKeys: ['top'], },
    
    'bottom': { affectedKeys: ['bottom'], },
    'b': { affectedKeys: ['bottom'], },
    
    'left': { affectedKeys: ['left'], },
    'l': { affectedKeys: ['left'], },
    
    'right': { affectedKeys: ['right'], },
    'r': { affectedKeys: ['right'], },

    'transform': { affectedKeys: ['transform'], },

    'transition': { affectedKeys: ['transition'], },
    'transition-sec': { affectedKeys: ['transition'], },

    'font-size': { affectedKeys: ['font-size'], },
    'font-family': { affectedKeys: ['font-family'], },

    'opacity': { affectedKeys: ['opacity'], },
    
    'pointer-events': { affectedKeys: ['pointer-events'], },
    'pointer-events-none': { affectedKeys: ['pointer-events'], },

    'background': { affectedKeys: ['background'], },
    'bg': { affectedKeys: ['background'], },

    'color': { affectedKeys: ['color'], },

    'pre': { affectedKeys: ['pre',], },
    
    'border': { affectedKeys: ['border'], },
    'border-radius': { affectedKeys: ['border-radius'], },

    'is-hidden': { affectedKeys: ['display'], },
  }

  static get observedAttributes() {
    return [
      'class-name',
      'style',
      'block',
      'inline-block',
      'inline',
      'div-table',
      'dt',
      'div-table-row',
      'dt-row',
      'div-table-cell',
      'dt-cell',
      'div-table-head',
      'dt-head',
      'div-table-body',
      'dt-body',
      'div-table-foot',
      'dt-foot',
      'row',
      'column',
      'col',
      'text-align',
      'ta',
      'text-align-center',
      'ta-center',
      'text-align-left',
      'ta-left',
      'text-align-right',
      'ta-right',
      'vertical-align',
      'va',
      'vertical-align-middle',
      'va-middle',
      'vertical-align-top',
      'va-top',
      'vertical-align-bottom',
      'va-bottom',
      'align-start',
      'a-start',
      'align-center',
      'a-center',
      'align-end',
      'a-end',
      'align-stretch',
      'a-stretch',
      'justify-start',
      'j-start',
      'justify-end',
      'j-end',
      'justify-center',
      'j-center',
      'justify-space-between',
      'j-space-between',
      'justify-space-around',
      'j-space-around',
      'justify-stretch',
      'j-stretch',
      'padding',
      'p',
      'padding-horizontal',
      'ph',
      'padding-vertical',
      'pv',
      'padding-top',
      'pt',
      'padding-bottom',
      'pb',
      'padding-left',
      'pl',
      'padding-right',
      'pr',
      'margin',
      'm',
      'margin-horizontal',
      'mh',
      'margin-vertical',
      'mv',
      'margin-top',
      'mt',
      'margin-bottom',
      'mb',
      'margin-left',
      'ml',
      'margin-right',
      'mr',
      'width',
      'w',
      'height',
      'h',
      'widthfull',
      'wfull',
      'heightfull',
      'hfull',
      'widthfullview',
      'wfullv',
      'heightfullview',
      'hfullv',
      'min-width',
      'min-w',
      'min-height',
      'min-h',
      'max-width',
      'max-w',
      'max-height',
      'max-h',
      'flex',
      'gap',
      'overflow-hidden',
      'o-hidden',
      'overflow-visible',
      'o-visible',
      'overflow-scroll',
      'o-scroll',
      'overflow-auto',
      'o-auto',
      'overflow-x-hidden',
      'ox-hidden',
      'overflow-x-visible',
      'ox-visible',
      'overflow-x-scroll',
      'ox-scroll',
      'overflow-x-auto',
      'ox-auto',
      'overflow-y-hidden',
      'oy-hidden',
      'overflow-y-visible',
      'oy-visible',
      'overflow-y-scroll',
      'oy-scroll',
      'overflow-y-auto',
      'oy-auto',
      'relative',
      'rel',
      'absolute',
      'abs',
      'fixed',
      'top',
      't',
      'bottom',
      'b',
      'left',
      'l',
      'right',
      'r',
      'transform',
      'transition',
      'transition-sec',
      'font-size',
      'font-family',
      'opacity',
      'pointer-events',
      'pointer-events-none',
      'background',
      'bg',
      'color',
      'pre',
      'border',
      'border-radius',
      'is-hidden',
    ]; // Declare observed attributes for changes
  }

  constructor() {
    super();
    // Add your enchanting logic here
    this.uuid = this.generateUUID()
    const shadowRoot = this.attachShadow({ mode: 'open' }); // Create a shadow DOM to encapsulate component content
    const root = document.createElement('div');
    const childrenSlot = document.createElement('slot');
    root.appendChild(childrenSlot);
    shadowRoot.appendChild(root);

    this.root = root;
    this.root.setAttribute("id", this.uuid)
  }

  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  

  // connect component
  connectedCallback() {
    console.log("connectedCallback")
    this.updateStyle(); // Invoke the render method when component is connected to the DOM
    this.isJustConnected = true;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.isConnected && this.isJustConnected) {
      console.log("attributeChangedCallback", name, oldValue, newValue)
      if (oldValue !== newValue) {
        this.updateStyle(name); // Re-render component when observed attributes change
      }
    }
  }



  getStringOrNumberOrNullAsDimensions(...values) {
    for (const value of values) {
      if (value === 'false') {
        continue
      }
      if (value !== null) {
        if (!isNaN( Number(value) )) {
          return `${value}px`;
        }
        return value;
      }
    }
    return null;
  }




  getStringOrNumberOrNull(...values) {
    for (const value of values) {
      if (value === 'false') {
        continue
      }
      if (value !== null) {
        return value;
      }
    }
    return null;
  }




  updateStyle(attributeName) {

    const constFalse = 'false'
    let keyMap = null

    let __input_styles = {}

    if (attributeName) {
      const keyList = ((TPBox.attributeToStyleMapping[attributeName] || {}).affectedKeys) || []

      keyMap = keyList.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = true
        return accumulator
      }, {})
    }


    if (!keyMap || keyMap['CLASSNAME']) {
      this.root.setAttribute('class', ` ____tpbox ${this.getAttribute('className') || ''} `)
      if (keyMap) {
        return;
      }
    }


    
    if (!keyMap || keyMap['pre']) {

      const pre = ( this.hasAttribute('pre') && this.getAttribute('pre') !== constFalse ) || null;
      if (pre) {
        __input_styles['white-space'] = 'pre-wrap';
        __input_styles['font-family'] = 'monospace';
        __input_styles['overflow-x'] = 'auto';
        __input_styles['overflow-wrap'] = 'break-word';
      }
      
    }

    if (!keyMap || keyMap['display']) {
      const block = ( this.hasAttribute('block') && this.getAttribute('block') !== constFalse ) || null;
      const inlineBlock = ( this.hasAttribute('inline-block') && this.getAttribute('inline-block') !== constFalse ) || null;
      const inline = ( this.hasAttribute('inline') && this.getAttribute('inline') !== constFalse ) || null;
      const dt = ( this.hasAttribute('dt') && this.getAttribute('dt') !== constFalse ) || null;
      const divTable = dt || ( this.hasAttribute('div-table') && this.getAttribute('div-table') !== constFalse ) || null;
      const dtRow = ( this.hasAttribute('dt-row') && this.getAttribute('dt-row') !== constFalse ) || null;
      const divTableRow = dtRow || ( this.hasAttribute('div-table-row') && this.getAttribute('div-table-row') !== constFalse ) || null;
      const dtCell = ( this.hasAttribute('dt-cell') && this.getAttribute('dt-cell') !== constFalse ) || null;
      const divTableCell = dtCell || ( this.hasAttribute('div-table-cell') && this.getAttribute('div-table-cell') !== constFalse ) || null;
      const dtHead = ( this.hasAttribute('dt-head') && this.getAttribute('dt-head') !== constFalse ) || null;
      const divTableHead = dtHead || ( this.hasAttribute('div-table-head') && this.getAttribute('div-table-head') !== constFalse ) || null;
      const dtBody = ( this.hasAttribute('dt-body') && this.getAttribute('dt-body') !== constFalse ) || null;
      const divTableBody = dtBody || ( this.hasAttribute('div-table-body') && this.getAttribute('div-table-body') !== constFalse ) || null;
      const dtFoot = ( this.hasAttribute('dt-foot') && this.getAttribute('dt-foot') !== constFalse ) || null;
      const divTableFoot = dtFoot || ( this.hasAttribute('div-table-foot') && this.getAttribute('div-table-foot') !== constFalse ) || null;
      const isHidden = ( this.hasAttribute('is-hidden') && this.getAttribute('is-hidden') !== constFalse ) || null;

      if (isHidden) {
        __input_styles['display'] = 'none';
      }
      else if (block) {
        __input_styles['display'] = 'block';
      }
      else if (inlineBlock) {
        __input_styles['display'] = 'inline-block';
      }
      else if (inline) {
        __input_styles['display'] = 'inline';
      }
      else if (divTable) {
        __input_styles['display'] = 'table';
      }
      else if (divTableRow) {
        __input_styles['display'] = 'table-row';
      }
      else if (divTableCell) {
        __input_styles['display'] = 'table-cell';
      }
      else if (divTableHead) {
        __input_styles['display'] = 'table-header-group';
      }
      else if (divTableBody) {
        __input_styles['display'] = 'table-row-group';
      }
      else if (divTableFoot) {
        __input_styles['display'] = 'table-footer-group';
      }
      else {
        __input_styles['display'] = 'flex';
      }
    }

    if (!keyMap || keyMap['flex-direction']) {
      const row = ( this.hasAttribute('row') && this.getAttribute('row') !== constFalse ) || null;
      const col = ( this.hasAttribute('col') && this.getAttribute('col') !== constFalse ) || null;
      const column = col || ( this.hasAttribute('column') && this.getAttribute('column') !== constFalse ) || null;

      if (row) {
        __input_styles['flex-direction'] = 'row'
      }
      else if (column) {
        __input_styles['flex-direction'] = 'column'
      }
      else {
        __input_styles['flex-direction'] = 'column'
      }
    }

    if (!keyMap || keyMap['text-align']) {
      const textAlign = this.getStringOrNumberOrNull( this.getAttribute('ta'), this.getAttribute('text-align') )
      const textAlignCenter = this.getStringOrNumberOrNull( this.getAttribute('ta-center'), this.getAttribute('text-align-center') )
      const textAlignLeft = this.getStringOrNumberOrNull( this.getAttribute('ta-left'), this.getAttribute('text-align-left') )
      const textAlignRight = this.getStringOrNumberOrNull( this.getAttribute('ta-right'), this.getAttribute('text-align-right') )
    
      if (textAlign !== null) {
        __input_styles['text-align'] = textAlign;
      }
      else if (textAlignCenter) {
        __input_styles['text-align'] = 'center';
      }
      else if (textAlignLeft) {
        __input_styles['text-align'] = 'left';
      }
      else if (textAlignRight) {
        __input_styles['text-align'] = 'right';
      }
      else if (textAlignRight) {
        __input_styles['text-align'] = null;
      }

    
    }
    if (!keyMap || keyMap['vertical-align']) {
      const verticalAlign = this.getStringOrNumberOrNull( this.getAttribute('va'), this.getAttribute('vertical-align') )
      const verticalAlignMiddle = this.getStringOrNumberOrNull( this.getAttribute('va-middle'), this.getAttribute('vertical-align-middle') )
      const verticalAlignTop = this.getStringOrNumberOrNull( this.getAttribute('va-top'), this.getAttribute('vertical-align-top') )
      const verticalAlignBottom = this.getStringOrNumberOrNull( this.getAttribute('va-bottom'), this.getAttribute('vertical-align-bottom') )
    
      if (verticalAlign) {
        __input_styles['vertical-align'] = verticalAlign;
      }
      else if (verticalAlignMiddle !== null) {
        __input_styles['vertical-align'] = 'middle';
      }
      else if (verticalAlignTop) {
        __input_styles['vertical-align'] = 'top';
      }
      else if (verticalAlignBottom) {
        __input_styles['vertical-align'] = 'bottom';
      }
      else {
        __input_styles['vertical-align'] = null;
      }

    }


    if (!keyMap || keyMap['align-items']) {
      const alignStart = this.getStringOrNumberOrNull( this.getAttribute('a-start'), this.getAttribute('align-start') )
      const alignEnd = this.getStringOrNumberOrNull( this.getAttribute('a-end'), this.getAttribute('align-end') )
      const alignCenter = this.getStringOrNumberOrNull( this.getAttribute('a-center'), this.getAttribute('align-center') )
      const alignStretch = this.getStringOrNumberOrNull( this.getAttribute('a-stretch'), this.getAttribute('align-stretch') )
    
      if (alignStart) {
        __input_styles['align-items'] = 'flex-start';
      }
      else if (alignCenter) {
        __input_styles['align-items'] = 'center';
      }
      else if (alignStretch) {
        __input_styles['align-items'] = 'stretch';
      }
      else if (alignEnd) {
        __input_styles['align-items'] = 'flex-end';
      }
      else {
        __input_styles['align-items'] = null;
      }

    }


    if (!keyMap || keyMap['justify-content']) {

      const justifyStart = this.getStringOrNumberOrNull( this.getAttribute('j-start'), this.getAttribute('justify-start') )
      const justifyEnd = this.getStringOrNumberOrNull( this.getAttribute('j-end'), this.getAttribute('justify-end') )
      const justifyCenter = this.getStringOrNumberOrNull( this.getAttribute('j-center'), this.getAttribute('justify-center') )
      const justifyStretch = this.getStringOrNumberOrNull( this.getAttribute('j-stretch'), this.getAttribute('justify-stretch') )
      const justifySpaceBetween = this.getStringOrNumberOrNull( this.getAttribute('j-space-between'), this.getAttribute('justify-space-between') )
      const justifySpaceAround = this.getStringOrNumberOrNull( this.getAttribute('j-space-around'), this.getAttribute('justify-space-around') )
    
      if (justifyStart) {
        __input_styles['justify-content'] = 'flex-start';
      }
      else if (justifyEnd) {
        __input_styles['justify-content'] = 'flex-end';
      }
      else if (justifyCenter) {
        __input_styles['justify-content'] = 'center';
      }
      else if (justifyStretch) {
        __input_styles['justify-content'] = 'stretch';
      }
      else if (justifySpaceBetween) {
        __input_styles['justify-content'] = 'space-between';
      }
      else if (justifySpaceAround) {
        __input_styles['justify-content'] = 'space-around';
      }
      else {
        __input_styles['justify-content'] = null;
      }
    
    }


    if (!keyMap || keyMap['flex']) {
      __input_styles['flex'] = this.getStringOrNumberOrNull( this.getAttribute('flex') );
    }
  
    if (!keyMap || keyMap['gap']) {
      __input_styles['gap'] = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('gap') );
    }
  


    if (!keyMap || keyMap['padding']) {

      const padding = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('p'), this.getAttribute('padding') )
      const paddingHorizontal = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('ph'), this.getAttribute('padding-horizontal') )
      const paddingVertical = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('pv'), this.getAttribute('padding-vertical') )
      const paddingTop = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('pt'), this.getAttribute('padding-top') )
      const paddingBottom = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('pb'), this.getAttribute('padding-bottom') )
      const paddingLeft = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('pl'), this.getAttribute('padding-left') )
      const paddingRight = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('pr'), this.getAttribute('padding-right') )

      __input_styles['padding'] = padding;
      __input_styles['padding-left'] = this.getStringOrNumberOrNullAsDimensions( paddingLeft, paddingHorizontal );
      __input_styles['padding-right'] = this.getStringOrNumberOrNullAsDimensions( paddingRight, paddingHorizontal );
      __input_styles['padding-top'] = this.getStringOrNumberOrNullAsDimensions( paddingTop, paddingVertical );
      __input_styles['padding-bottom'] = this.getStringOrNumberOrNullAsDimensions( paddingBottom, paddingVertical );

    }


    if (!keyMap || keyMap['margin']) {

      const margin = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('m'), this.getAttribute('margin') )
      const marginHorizontal = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('mh'), this.getAttribute('margin-horizontal') )
      const marginVertical = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('mv'), this.getAttribute('margin-vertical') )
      const marginTop = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('mt'), this.getAttribute('margin-top') )
      const marginBottom = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('mb'), this.getAttribute('margin-bottom') )
      const marginLeft = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('ml'), this.getAttribute('margin-left') )
      const marginRight = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('mr'), this.getAttribute('margin-right') )

      __input_styles['margin'] = margin;
      __input_styles['margin-left'] = this.getStringOrNumberOrNullAsDimensions( marginLeft, marginHorizontal );
      __input_styles['margin-right'] = this.getStringOrNumberOrNullAsDimensions( marginRight, marginHorizontal );
      __input_styles['margin-top'] = this.getStringOrNumberOrNullAsDimensions( marginTop, marginVertical );
      __input_styles['margin-bottom'] = this.getStringOrNumberOrNullAsDimensions( marginBottom, marginVertical );

    }

    if (!keyMap || keyMap['width']) {
      __input_styles['width'] = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('widthfull') && `100%`, this.getAttribute('widthfullview') && `100vw`, this.getAttribute('w'), this.getAttribute('width') );
    }

    if (!keyMap || keyMap['height']) {
      __input_styles['height'] = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('heightfull') && `100%`, this.getAttribute('heightfullview') && `100vh`, this.getAttribute('h'), this.getAttribute('height') );
    }


    if (!keyMap || keyMap['min-width']) {
      __input_styles['min-width'] = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('min-width') );
    }

    if (!keyMap || keyMap['min-height']) {
      __input_styles['min-height'] = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('min-height') );
    }

    if (!keyMap || keyMap['max-width']) {
      __input_styles['max-width'] = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('max-width') );
    }

    if (!keyMap || keyMap['max-height']) {
      __input_styles['max-height'] = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('max-height') );
    }

    


    if (!keyMap || keyMap['overflow']) {
      const o_hidden = ( this.hasAttribute('o-hidden') && this.getAttribute('o-hidden') !== constFalse ) || null;
      const overflowHidden = o_hidden || ( this.hasAttribute('overflow-hidden') && this.getAttribute('overflow-hidden') !== constFalse ) || null;
      const o_visible = ( this.hasAttribute('o-visible') && this.getAttribute('o-visible') !== constFalse ) || null;
      const overflowVisible = o_visible || ( this.hasAttribute('overflow-visible') && this.getAttribute('overflow-visible') !== constFalse ) || null;
      const o_scroll = ( this.hasAttribute('o-scroll') && this.getAttribute('o-scroll') !== constFalse ) || null;
      const overflowScroll = o_scroll || ( this.hasAttribute('overflow-scroll') && this.getAttribute('overflow-scroll') !== constFalse ) || null;
      const o_auto = ( this.hasAttribute('o-auto') && this.getAttribute('o-auto') !== constFalse ) || null;
      const overflowAuto = o_auto || ( this.hasAttribute('overflow-auto') && this.getAttribute('overflow-auto') !== constFalse ) || null;


      if (overflowHidden) {
        __input_styles['overflow'] = 'hidden'
      }
      else if (overflowVisible) {
        __input_styles['overflow'] = 'visible'
      }
      else if (overflowScroll) {
        __input_styles['overflow'] = 'scroll'
      }
      else if (overflowAuto) {
        __input_styles['overflow'] = 'auto'
      }
    
    }


    if (!keyMap || keyMap['overflow-x']) {
      const ox_hidden = ( this.hasAttribute('ox-hidden') && this.getAttribute('ox-hidden') !== constFalse ) || null;
      const overflowXHidden = ox_hidden || ( this.hasAttribute('overflow-x-hidden') && this.getAttribute('overflow-x-hidden') !== constFalse ) || null;
      const ox_visible = ( this.hasAttribute('ox-visible') && this.getAttribute('ox-visible') !== constFalse ) || null;
      const overflowXVisible = ox_visible || ( this.hasAttribute('overflow-x-visible') && this.getAttribute('overflow-x-visible') !== constFalse ) || null;
      const ox_scroll = ( this.hasAttribute('ox-scroll') && this.getAttribute('ox-scroll') !== constFalse ) || null;
      const overflowXScroll = ox_scroll || ( this.hasAttribute('overflow-x-scroll') && this.getAttribute('overflow-x-scroll') !== constFalse ) || null;
      const ox_auto = ( this.hasAttribute('ox-auto') && this.getAttribute('ox-auto') !== constFalse ) || null;
      const overflowXAuto = ox_auto || ( this.hasAttribute('overflow-x-auto') && this.getAttribute('overflow-x-auto') !== constFalse ) || null;


      if (overflowXHidden) {
        __input_styles['overflow-x'] = 'hidden'
      }
      else if (overflowXVisible) {
        __input_styles['overflow-x'] = 'visible'
      }
      else if (overflowXScroll) {
        __input_styles['overflow-x'] = 'scroll'
      }
      else if (overflowXAuto) {
        __input_styles['overflow-x'] = 'auto'
      }
    
    }
    if (!keyMap || keyMap['overflow-y']) {
      const oy_hidden = ( this.hasAttribute('oy-hidden') && this.getAttribute('oy-hidden') !== constFalse ) || null;
      const overflowYHidden = oy_hidden || ( this.hasAttribute('overflow-y-hidden') && this.getAttribute('overflow-y-hidden') !== constFalse ) || null;
      const oy_visible = ( this.hasAttribute('oy-visible') && this.getAttribute('oy-visible') !== constFalse ) || null;
      const overflowYVisible = oy_visible || ( this.hasAttribute('overflow-y-visible') && this.getAttribute('overflow-y-visible') !== constFalse ) || null;
      const oy_scroll = ( this.hasAttribute('oy-scroll') && this.getAttribute('oy-scroll') !== constFalse ) || null;
      const overflowYScroll = oy_scroll || ( this.hasAttribute('overflow-y-scroll') && this.getAttribute('overflow-y-scroll') !== constFalse ) || null;
      const oy_auto = ( this.hasAttribute('oy-auto') && this.getAttribute('oy-auto') !== constFalse ) || null;
      const overflowYAuto = oy_auto || ( this.hasAttribute('overflow-y-auto') && this.getAttribute('overflow-y-auto') !== constFalse ) || null;

      if (overflowYHidden) {
        __input_styles['overflow-y'] = 'hidden'
      }
      else if (overflowYVisible) {
        __input_styles['overflow-y'] = 'visible'
      }
      else if (overflowYScroll) {
        __input_styles['overflow-y'] = 'scroll'
      }
      else if (overflowYAuto) {
        __input_styles['overflow-y'] = 'auto'
      }
    
    }


    if (!keyMap || keyMap['position']) {
      const rel = ( this.hasAttribute('rel') && this.getAttribute('rel') !== constFalse ) || null;
      const relative = rel || ( this.hasAttribute('relative') && this.getAttribute('relative') !== constFalse ) || null;
      const abs = ( this.hasAttribute('abs') && this.getAttribute('abs') !== constFalse ) || null;
      const absolute = abs || ( this.hasAttribute('absolute') && this.getAttribute('absolute') !== constFalse ) || null;
      const fixed = ( this.hasAttribute('fixed') && this.getAttribute('fixed') !== constFalse ) || null;

      if (relative) {
        __input_styles['position'] = 'relative'
      }
      else if (absolute) {
        __input_styles['position'] = 'absolute'
      }
      else if (fixed) {
        __input_styles['position'] = 'fixed'
      }
    }

    if (!keyMap || keyMap['top']) {
      __input_styles['top'] = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('t'), this.getAttribute('top') )
    }
    if (!keyMap || keyMap['bottom']) {
      __input_styles['bottom'] = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('b'), this.getAttribute('bottom') )
    }
    if (!keyMap || keyMap['left']) {
      __input_styles['left'] = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('l'), this.getAttribute('left') )
    }
    if (!keyMap || keyMap['right']) {
      __input_styles['right'] = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('r'), this.getAttribute('right') )
    }


    if (!keyMap || keyMap['transform']) {
      const transform = this.getAttribute('transform') || null;
      __input_styles['transform'] = transform
    }

    if (!keyMap || keyMap['transition']) {
      const transition = this.getAttribute('transition') || null;
      const transitionSec = this.getAttribute('transition-sec') || null;
      const _transition = (transition || transitionSec) ? true : null;
      if (_transition == null) {
        __input_styles['transition'] = null
      } else {
        __input_styles['transition'] = `${_transition === true ? `all` : transition} ${Number(transitionSec || 1)}s`
      }
    }
    
    if (!keyMap || keyMap['font-size']) {
      __input_styles['font-size'] = this.getStringOrNumberOrNullAsDimensions( this.getAttribute('font-size') )
    }
    if (!keyMap || keyMap['font-family']) {
      __input_styles['font-family'] = this.getStringOrNumberOrNull( this.getAttribute('font-family') );
    }
    if (!keyMap || keyMap['opacity']) {
      __input_styles['opacity'] = this.getStringOrNumberOrNull( this.getAttribute('opacity') )
    }
    if (!keyMap || keyMap['pointer-events']) {
      const pointerEvents = this.getAttribute('pointer-events') || null;
      const pointerEventsNone = ( this.hasAttribute('pointer-events-none') && this.getAttribute('pointer-events-none') !== constFalse ) || null;

      if (pointerEventsNone) {
        __input_styles['pointer-events'] = `none`
      } else if (pointerEvents) {
        __input_styles['pointer-events'] = pointerEvents
      }
    }
    if (!keyMap || keyMap['background']) {
      const bg = this.getAttribute('bg') || null;
      const background = bg || this.getAttribute('background') || null;

      __input_styles['background'] = background
    }
    if (!keyMap || keyMap['color']) {
      const color = this.getAttribute('color') || null;
      __input_styles['color'] = color
    }

    if (!keyMap || keyMap['border']) {
      const border = this.getAttribute('border') || null;
      __input_styles['border'] = border
    }
    if (!keyMap || keyMap['border-radius']) {
      const borderRadius = this.getAttribute('border-radius') || null;
      __input_styles['border-radius'] = borderRadius
    }



    // debugger
    if (!keyMap) {
      this.root.setAttribute('style', Object.entries(__input_styles).map(([key, value]) => value !== null ? ` ${key}: ${value}; ` : ` `).join(' ') )
    }

    else {
      Object.entries(__input_styles).map(([key, value]) => {
        if (value === null) {
          this.root.style.removeProperty(key)
        }
        else {
          this.root.style[key] = value
        }
      })
    }
  }

}

if (typeof window !== "undefined") {
  try {
    window.customElements.define('tp-box', TPBox);
  } catch (e) {
    //
  }
}

