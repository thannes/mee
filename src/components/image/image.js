import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import NonStretchedImage from './nonstretchedimage';

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 4000) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      // console.log(props.alt)
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if(!image){
        console.warn(props.filename)
      }
      if(!!image && !!image.node && !!image.node.relativePath){
        if( image.node.relativePath==="Hero_Image_Desktop.jpg" || image.node.relativePath==="Hero_Image_Desktop_new.jpg" || image.node.relativePath==="Clinical_Trial_Desktop_new.jpg"){
          image.node.childImageSharp.fluid.presentationWidth = 1275
        }
      }
      if (!image) {
        return null;
      }
      return <NonStretchedImage alt={props.alt} className={props.classes} fluid={image.node.childImageSharp.fluid} />;
    }}
  />
);

export default Image;