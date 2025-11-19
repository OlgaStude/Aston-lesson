export type postType = {
    userId: 1,
    id: number,
    title: string,
    body: string
}

export type postCardType = {
    id: number,
    title: string, 
    body: string
}

export type postInitialState = {
    postId: string,
    post: postType[],
    status: 'loading' | ''
}

export type postSelectorType = {
  status: 'loading' | '',
  post: postType
}