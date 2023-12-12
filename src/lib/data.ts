import { readFileSync } from "fs";
import { TCategory, TCourse } from "./types";

// export const mockCategories: TCategory[] = [
//     { id: 1, name: 'Управление' },
//     { id: 2, name: 'Дизайн' },
//     { id: 3, name: 'Программирование' }
// ]

export const mockCategories: TCategory[] = JSON.parse(readFileSync('src/lib/categories.json', 'utf8'))

// export const mockCourses: TCourse[] = [
//     { id: 1, name: 'Продакт-менеджер', categoryId: 1 },
//     { id: 2, name: 'Финансовый аналитик', categoryId: 1 },
//     { id: 3, name: 'Системный аналитик', categoryId: 1 },
//     { id: 4, name: 'Бизнес-аналитик', categoryId: 1 },
//     { id: 5, name: 'Финансовый менеджер', categoryId: 1 },
//     { id: 6, name: 'Веб-дизайн', categoryId: 2 },
//     { id: 7, name: 'Графический дизайн', categoryId: 2 },
//     { id: 8, name: 'Дизайн интерьера', categoryId: 2 },
//     { id: 9, name: 'Иллюстратор', categoryId: 2 },
//     { id: 10, name: 'Моушн-дизайн', categoryId: 2 },
//     { id: 11, name: 'Веб-разработка', categoryId: 3 },
//     { id: 12, name: 'Мобильная разработка', categoryId: 3 },
//     { id: 13, name: 'Системный администратор', categoryId: 3 },
//     { id: 14, name: 'Тестировщик', categoryId: 3 },
//     { id: 15, name: 'Информационная безопасность', categoryId: 3 }
// ]

export const mockCourses: TCourse[] = JSON.parse(readFileSync('src/lib/courses_data.json', 'utf8'))