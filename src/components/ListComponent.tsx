import { ListItemJournal } from './ListItemJournal';
import { ListItemTodo } from './ListItemTodo';

// Original way of doing it with genericss
export interface TodoType {
	id: number;
	title: string;
	completed: boolean;
	date: string;
}

export interface JournalType {
	id: number;
	title: string;
	content: string;
	date: string;
}

type Option = TodoType | JournalType;

interface Props<Type> {
	options: Type[];
}

const isTodo = (props: Option): props is TodoType => {
	return 'completed' in props;
};

export const ListComponent = <Type extends Option>(props: Props<Type>) => {
	return (
		<div className='px-5 py-2 divide-y'>
			{props.options.map((item) => {
				if (isTodo(item)) {
					return <ListItemTodo key={item.id} {...item} />;
				} else {
					return <ListItemJournal key={item.id} {...item} />;
				}
			})}
		</div>
	);
};

// // Using generics and internal comparator witout type checking
// export interface TodoType {
// 	id: number;
// 	title: string;
// 	completed: boolean;
// 	date: string;
// }

// export interface JournalType {
// 	id: number;
// 	title: string;
// 	content: string;
// 	date: string;
// }

// type Option = TodoType | JournalType;

// interface Props<Type> {
// 	options: Type[];
// }

// export const ListComponent = <Type extends Option>(props: Props<Type>) => {
// 	return (
// 		<div className='px-5 py-2 divide-y'>
// 			{props.options.map((item) => {
// 				if ('completed' in item) {
// 					return <ListItemTodo key={item.id} {...item} />;
// 				} else {
// 					return <ListItemJournal key={item.id} {...item} />;
// 				}
// 			})}
// 		</div>
// 	);
// };

// // Without generics and internal comparator witout type checking
// export interface TodoType {
// 	id: number;
// 	title: string;
// 	completed: boolean;
// 	date: string;
// }

// type TodoArr = {
// 	options: TodoType[];
// };

// export interface JournalType {
// 	id: number;
// 	title: string;
// 	content: string;
// 	date: string;
// }

// type JournalArr = {
// 	options: JournalType[];
// };

// type Option = TodoArr | JournalArr;

// export const ListComponent = (props: Option) => {
// 	return (
// 		<div className='px-5 py-2 divide-y'>
// 			{props.options.map((item) => {
// 				if ('completed' in item) {
// 					return <ListItemTodo key={item.id} {...item} />;
// 				} else {
// 					return <ListItemJournal key={item.id} {...item} />;
// 				}
// 			})}
// 		</div>
// 	);
// };

// // Without generics and internal comparator witout type checking 2
// export interface TodoType {
// 	id: number;
// 	title: string;
// 	completed: boolean;
// 	date: string;
// }
// export interface JournalType {
// 	id: number;
// 	title: string;
// 	content: string;
// 	date: string;
// }

// type Option = { options: JournalType[] } | { options: TodoType[] };

// export const ListComponent = (props: Option) => {
// 	return (
// 		<div className='px-5 py-2 divide-y'>
// 			{props.options.map((item) => {
// 				if ('completed' in item) {
// 					return <ListItemTodo key={item.id} {...item} />;
// 				} else {
// 					return <ListItemJournal key={item.id} {...item} />;
// 				}
// 			})}
// 		</div>
// 	);
// };
