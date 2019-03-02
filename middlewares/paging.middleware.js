exports.initPage = function (req, res, next) {
    req.pageSize = 20;
    req.limit = req.pageSize;
    req.page = 1;
    req.offset = (req.page - 1) * req.pageSize;

    if (req.query.pageSize != null)
        req.pageSize = req.query.pageSize;


    if (req.query.page != null)
        req.page = req.query.page;

    next();
};