"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
const routes = routes_1.default();
app.set('API_HOST', process.env.API_HOST || 'localhost');
app.set('API_PORT', process.env.API_PORT || 4000);
app.use('/', routes);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.listen(app.get('API_PORT'), () => {
    console.log(`Server on ${process.env.API_HOST}:${app.get('API_PORT')}`);
});
