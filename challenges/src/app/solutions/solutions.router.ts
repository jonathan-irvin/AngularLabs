import { RouterModule } from '@angular/router';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { AjaxPeopleListComponent } from './ajax/ajax-people-list.component';
import { PeopleListComponent } from './composition/people-list.component';
import { ObservableComponent } from './observable/observable.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { CustomValidatorDirectiveComponent } from './custom-validator-directive/custom-validator-directive.component';
import { QuerystringsComponent } from './querystrings/querystrings.component';

const solutionsRoutes = [
  {path:"solutions/builtInDirectives", component: BuiltInDirectivesComponent},
  {path:"solutions/customDirectives", component: CustomDirectivesComponent},
  {path:"solutions/customValidator", component: CustomValidatorDirectiveComponent},
  {path:"solutions/ajax", component: AjaxPeopleListComponent},
  {path:"solutions/forms", component: FormsDemoComponent},
  {path:"solutions/composition", component: PeopleListComponent},
  {path:"solutions/observable", component: ObservableComponent},
  {path:"solutions/querystrings", component: QuerystringsComponent},
];
export const solutionsRouter = RouterModule.forChild(solutionsRoutes);