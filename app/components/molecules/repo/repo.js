import Component from '@glimmer/component';
import csz from 'csz';
import { inject as service } from '@ember/service';

const imageArea = csz`
  background: linear-gradient(to top, #2193b0, #6dd5ed);
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const repoInfoArea = csz`
padding: 24px 32px;
width: 60%;
`;

const repo = csz`
  width: 500px;
  height: 240px;
  margin: 0 auto 50px;
  display: flex;
  overflow: hidden;
  box-shadow: -20px 10px 30px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #333;
  border-radius: 10px;
  &:hover {
    text-decoration: none;
    color: #333;
  }
`;

export default class MoleculesRepoRepoComponent extends Component {
  imageArea = imageArea;
  repoInfoArea = repoInfoArea;
  repo = repo;
  @service store;

  async mode(params) {
    console.log(await this.store.findAll());
  }
}