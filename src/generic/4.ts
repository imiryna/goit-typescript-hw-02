/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IProps {
  title: string;
}

interface IComponent<T> {
  props: T;
}

class Component implements IComponent<IProps> {
  constructor(public props: IProps) {
    this.props = props;
  }
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

const page = new Page({ title: "ksjdhfkjshdfkj" });
page.pageInfo();

export {};
