exports.initPage = function (req, res, next) {
    req.pageSize = 20;
    req.page = 1;

    if (req.query.page_size != null) {
        req.pageSize = parseInt(req.query.page_size);
    }

    if (req.query.page != null)
        req.page = parseInt(req.query.page);

    req.offset = (req.page - 1) * req.pageSize;
    req.limit = req.pageSize;
    next();
};
