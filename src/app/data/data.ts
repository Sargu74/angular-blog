export type articleType = {
    id: number,
    pathImage: string,
    articleTitle: string,
    articleDate: string,
    smallContent: string
  }

export const Articles = [
    {
      id: 0,  
      pathImage: "../../../assets/images/bigCardImage.svg",
      articleTitle: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      articleDate: "January 11, 2022",
      smallContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare quam eget sapien faucibus, in vestibulum ipsum congue. Etiam ante lacus, tempus sed scelerisque ac, cursus ornare tortor. Suspendisse a risus in nisl porta dignissim nec eget tellus."
    },
    {
      id: 1,  
      pathImage: "../../../assets/images/firstCardImage.svg",
      articleTitle: "Morbi eget ante libero. Vestibulum eu lectus ipsum. Praesent egestas nulla vel nunc blandit.",
      articleDate: "March 27, 2022",
      smallContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 2,  
      pathImage: "../../../assets/images/secondCardImage.svg",
      articleTitle: "Curabitur sem tortor, euismod a dui id, congue varius leo.",
      articleDate: "February 16, 2022",
      smallContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    { id: 3,
      pathImage: "../../../assets/images/thirdCardImage.svg",
      articleTitle: "Nunc consequat fermentum augue ultricies euismod. Nulla et lectus semper erat ultricies semper in suscipit odio.",
      articleDate: "January 10, 2022",
      smallContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
  ]