"use strict";
// Lord, I thank you for this beautiful rainy day. I thank you for the opportunities you've provided me. Thank you for Your goodness and faithfulness. Please help me to finish this project before going camping. I appreciate all you do. I love you Lord!
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const petRoutes_1 = __importDefault(require("./routes/petRoutes"));
const models_1 = require("./models");
const petController_1 = require("./controllers/petController");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../src/public')));
app.set('view engine', 'hbs');
app.set('views', path_1.default.join(__dirname, "../src/views"));
app.set('view options', { layout: 'layout' });
app.use('/pets', petRoutes_1.default);
app.use('/', petController_1.defaultPets);
app.use((req, res, next) => {
    res.status(404).render('error', {
        message: "So sorry! This is not the URL you are looking for!!"
    });
});
models_1.db.sync().then(() => {
    console.info("We're connected to the petDB database!");
});
app.listen(3000);
