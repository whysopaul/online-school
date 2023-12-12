export type TCategory = {
    id: number,
    name: string
}

export type TArticleContent = {
    id: number,
    heading: string,
    course_link: string,
    image: string,
    price: string,
    text: string
}

export type TArticle = {
    title: string,
    description: string,
    content: TArticleContent[]
}

export type TCourse = {
    id: number,
    name: string,
    category_id: number,
    link: string,
    article: TArticle
}