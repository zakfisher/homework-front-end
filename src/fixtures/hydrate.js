import store from '../store';
import actions from '../actions';
import contactForm from './contact-form';
import projects from './projects';

/**
  Hydrate Redux Store
  ---
  ./app/fixtures/hydrate.js

  - This method is responsible for hydrating our Redux store with initial data.

  @returns {function} hydrate
*/

const hydrate = () => {
  // Add projects
  projects.forEach((project) => {
    store.dispatch(
      actions.addProject(project)
    );
  });

  // Add contact form
  store.dispatch(
    actions.addForm(contactForm)
  );
};

export default hydrate;
