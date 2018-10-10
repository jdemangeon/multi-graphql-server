import gql from 'graphql-tag';
import Base from '../../common/typeDefs/base';

const Page = gql`
    extend type Query {
        """
        Return Page
        """
        Page(id: String!): Page
    }

    type Page {
        """
        Unique page identifier
        """
        id: String!

        """
        Page title
        """
        title: String!

        """
        Page subtitle
        """
        subtitle: String!
    }
`;

gql.resetCaches();

export default () => [Page, Base];
