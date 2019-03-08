const PageMetaDto = require('./../shared/page_meta.dto');

function buildPagedList(todos, page, pageSize, totalResourcesCount, basePath) {
    return {
        success: true,
        page_meta: PageMetaDto.build(todos.length, page, pageSize, totalResourcesCount, basePath),
        ...buildDtos(todos),
    }
}

function buildDtos(todos) {
    return {
        todos: todos.map(todo => buildDto(todo))
    };
}

function buildDto(todo, includeDescription = false) {
    const dto = {
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
    };

    if (includeDescription)
        dto.desription = todo.description;

    dto.created_at = todo.createdAt;
    dto.updated_at = todo.updatedAt;
    return dto;
}

function buildDetails(todo) {
    return {success: true, ...buildDto(todo, true)};
}

module.exports = {
    buildPagedList, buildDtos, buildDetails, buildDto
};
