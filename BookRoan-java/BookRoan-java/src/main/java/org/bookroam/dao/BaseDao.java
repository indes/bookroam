package org.bookmate.dao;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;

import javax.annotation.Resource;

/**
 * Created by YT on 2018/5/26.
 */
public class BaseDao extends SqlSessionDaoSupport {
    @Resource
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory){
        super.setSqlSessionFactory(sqlSessionFactory);
    }
}
