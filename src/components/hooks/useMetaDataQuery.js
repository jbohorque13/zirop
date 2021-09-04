import { useStaticQuery, graphql } from 'gatsby';

export const useMetaDataQuery = () => {
    const data = useStaticQuery(graphql`
        query MetaDataQuery {
            site {
                siteMetadata {
                    description
                    siteUrl
                    title
                }
            }
        }
    `)
    return data.site.siteMetadata;
}
