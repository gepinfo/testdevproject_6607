import { Request, Response, NextFunction } from "express";
import { personController } from '../controller/personController';


export class Routes {
    private person: personController = new personController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/person/:id').get(this.person.GetEntityById);
app.route('/person').post(this.person.Create);
app.route('/person/:id').delete(this.person.Delete);
app.route('/person').put(this.person.Update);
app.route('/person').get(this.person.GetAllValues);
app.route('/person/userid/created_by').get(this.person.GetNounCreatedBy);
     }

}