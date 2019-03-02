exports.buildSuccessWithMessages = (messages) => {
    let response = {success: true};
    if (typeof messages === "string")
        response.full_messages = [messages];
    else if (messages instanceof Array)
        response.full_messages = messages;
    else if (messages instanceof Object)
        response.full_messages = Object.values(messages);

    return response;
};

exports.buildWithErrorMessages = (messages) => {
    let response = {success: false};
    response.errors = [];
    if (typeof messages === "string")
        response.full_messages = [messages];
    else if (messages instanceof Array)
        response.full_messages = messages;
    else if (messages instanceof Error) {
        response.full_messages = [messages.name + '->' + messages.message];
        response.errors.push({name: messages.name, message: messages.message});
        response.errors.push({stack: messages.stack});
    } else if (messages instanceof Object) {
        response.errors = messages;
        response.full_messages = Object.values(messages);
    }
    return response;
};

function buildWithDtoAndMessages(success, response, messages) {
    if (response === null)
        response = {};

    response.success = !!success;

    if (typeof messages === "string")
        response.full_messages = [messages];
    else if (messages instanceof Array)
        response.full_messages = messages;
    else if (messages instanceof Object)
        response.full_messages = Object.values(messages);

    return response;
}

exports.buildSuccessWithDtoAndMessages = (dto, messages) => {
    return buildWithDtoAndMessages(true, dto, messages);
};