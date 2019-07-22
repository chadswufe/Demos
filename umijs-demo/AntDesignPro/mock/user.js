const currentUser = {
  name: '管理员',
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  userid: '00000001',
  email: 'antdesign@alipay.com',
  signature: '海纳百川，有容乃大',
  title: '交互专家',
  group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
  tags: [
    {
      key: '0',
      label: '很有想法的',
    },
    {
      key: '1',
      label: '专注设计',
    },
  ],
  notifyCount: 12,
  unreadCount: 11,
  country: 'China',
  geographic: {
    province: {
      label: '上海市',
      key: '310000',
    },
    city: {
      label: '上海市',
      key: '310100',
    },
  },
  address: '南京西路1号',
  phone: '0752-268888888',
};

const users = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const accounts = [
  {
    userName: 'admin',
    password: '123456',
    mobile: '17602180649',
    captcha: '666666',
    currentAuthority: 'admin',
  },
  {
    userName: 'user',
    password: '123456',
    mobile: '18516320649',
    captcha: '888888',
    currentAuthority: 'user',
  },
];

const getFakeCaptcha = (req, res) => {
  return res.json('captcha-xxx');
}

const isValidAccount = (account, accountToCheck) => {
  const { type, password, userName, mobile, captcha } = accountToCheck;
  const isAccountValid =
    type == 'account'
    && account.userName == userName
    && account.password == password;
  const isMobileValid =
    type == 'mobile'
    && account.mobile == mobile
    && account.captcha == captcha;
  return isAccountValid || isMobileValid;
}

const login = (req, res) => {
  const { type } = req.body;

  for (let index = 0; index < accounts.length; index++) {
    let account = accounts[index];
    if (isValidAccount(account, req.body)) {
      res.send({
        status: 'ok',
        type,
        currentAuthority: account.currentAuthority,
        token: {
          userId: 'USERID-xxx',
          token: 'TOKEN-XXX',
        },
      });
      return;
    }
  }

  res.send({
    status: 'error',
    type,
    currentAuthority: 'guest',
    token: null,
  });
};

const register = (req, res) => {
  res.send({
    status: 'ok',
    currentAuthority: 'user',
  });
};

const getCurrentUser = (req, res) => {
  return res.json(currentUser);
};

const updateCurrentUser = (req, res) => {
  if (req.body.name == 'error') {
    res.status(400).send({
      error: "name can't be 'error'",
    });
  } else {
    currentUser.name = req.body.name;
    currentUser.geographic = req.body.geographic;
    currentUser.address = req.body.address;
    res.status(201).send({});
  }
};

export default {
  'GET /api/currentUser': getCurrentUser,
  'PATCH /api/currentUser': updateCurrentUser,
  'GET /api/users': users,
  'GET  /api/login/captcha': getFakeCaptcha,
  'POST /api/login/account': login,
  'POST /api/register': register,
};
