import { App } from "./app"
import { Config } from "./config"

const main = async () => {
	const config = Config()
	const app = App(config)
	await app.start()
}

main()

/*
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error.ejs', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
else{
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}
*/