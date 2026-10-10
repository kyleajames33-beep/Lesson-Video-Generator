import {ExchangeDiagram, type ExchangeProps} from './ExchangeDiagram';

// Scoped SVG label sizing preserves the existing particle simulation and art.
// With no explicit selection, this is exactly the original component tree.
export const Module5ExchangeSelector = (props: ExchangeProps & {labelPresentation?: 'module5'}) => {
  if (props.labelPresentation !== 'module5') return <ExchangeDiagram {...props} />;
  return <div className="module5-readable-exchange" style={{width: '100%'}}>
    <style>{`
      .module5-readable-exchange svg > text[y="32"] {font-size: 44px;}
      .module5-readable-exchange svg > text[y="250"] {font-size: 36px;}
      .module5-readable-exchange svg > text[y="300"] {font-size: 46px;}
    `}</style>
    <ExchangeDiagram {...props} />
  </div>;
};
