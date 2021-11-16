import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CadastrarConta from '../pages/CadastrarConta';
import EditarConta from '../pages/EditarConta';

import Index from '../pages/Index';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/cadastrar/" component={CadastrarConta} />
      <Route exact path="/detalhes/:id/" component={EditarConta} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
