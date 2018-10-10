import gql from 'graphql-tag';

const Base = gql`
    type Query {
        dummy: Boolean
    }
`;

gql.resetCaches();

export default () => [Base];
