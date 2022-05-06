import { ActionType } from '../action-types';

export interface Package {
    name: string;
    description?: string;
    author?: { name: string; email: string; username: string };
    keywords?: string[];
    links: { npm: string; homepage: string; repository: string; bugs: string };
    maintainers: Array<Record<string, any>>;
    publisher: { username: string; email: string };
    version: string;
}

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: Package[];
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;
