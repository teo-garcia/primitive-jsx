import * as React from 'react';
import { SeoProps } from '../../utils/types';

function Seo(props: SeoProps) {
  const {
    title,
    description = '',
    ogTitle = '',
    ogDescription = '',
    ogImage = '',
  } = props;
  return (
    <React.Fragment>
      {/* <Head> */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      {/* </Head> */}
    </React.Fragment>
  );
}

export { Seo };
