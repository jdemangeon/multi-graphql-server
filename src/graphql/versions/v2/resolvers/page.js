export const query = {
    Page: (_, { id }) => ({ id }),
};

export const resolver = {
    Page: {
        title: () => 'v2 title',
    }
};

