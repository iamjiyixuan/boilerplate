import React from 'react';
import { connect } from 'dva';

import styles from './IndexPage.css';

import { Layout, Button, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Footer, Content, Sider } = Layout;


function IndexPage({ dispatch, count }) {
  return (
    <div>
      <Layout>
        <Header style={{ background: 'white', borderStyle: 'solid', borderWidth: 0, borderColor: 'lightgray' }}>
          Yay! Welcome to dva!
        </Header>
        <Layout>
          <Sider width={200} style={{ background: 'white' }}>
            侧边栏
          </Sider>
          <Layout>
            <Content style={{ background: 'white', borderStyle: 'solid', borderWidth: 1, borderColor: 'lightgray', minHeight: 280, padding: 10 }}>

              <h2>计数器</h2>
              <Button style={{ marginRight: 10, }} size='small' onClick={() => {
                dispatch({ type: 'count/add' });
              }}>+</Button>
              <Button style={{ marginRight: 10, }} size='small' onClick={() => {
                dispatch({ type: 'count/addDelay' });
              }}>*+</Button>
              <Button style={{ marginRight: 10, }} size='small' onClick={() => {
                dispatch({ type: 'count/minus' });
              }}>-</Button>
              count:{count}

              <h2>gank.io api</h2>
              <Button style={{ marginRight: 10, }} size='small' onClick={() => {
                dispatch({ type: 'gank/getGankData' });
              }}>api/data/Android/10/1</Button>
            </Content>
          </Layout>
        </Layout>

        <Footer style={{ background: 'white', borderStyle: 'solid', borderWidth: 0, borderColor: 'lightgray' }}>
          Footer
        </Footer>
      </Layout>
    </div>
  );
}

IndexPage.propTypes = {
};

const mapStateToProps = ({ count }) => ({ count });

export default connect(mapStateToProps)(IndexPage);
