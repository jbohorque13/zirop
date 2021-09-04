import { useStaticQuery, graphql } from 'gatsby';

export const useConfig = () => {
    const data = useStaticQuery(graphql`
        query Config {
            markdownRemark {
                frontmatter {
                    menu {
                        id
                        name
                        page
                    }
                }
            }
        }
    `);
    return data.markdownRemark.frontmatter.menu;
}
