export const query = {
    Page: (_, { id }) => ({ id }),
};

export const resolver = {
    Page: {
        title: () => 'v1 title',
        subtitle: () => 'v1 subtitle'
    }
};

