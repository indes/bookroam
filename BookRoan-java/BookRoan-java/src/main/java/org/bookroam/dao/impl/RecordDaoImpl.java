package org.bookmate.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.bookmate.dao.BaseDao;
import org.bookmate.dao.RecordDao;
import org.bookmate.entities.BorrowRecord;
import org.bookmate.entities.BrowseRecord;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

/**
 * 记录相关数据访问实现类
 * @author yangyuhao
 *
 */
@Repository
public class RecordDaoImpl extends BaseDao implements RecordDao {

	@Override
	public void insertBorrowRecord(BorrowRecord borrowRecord) {
		this.getSqlSession().insert(BORROW_RECORD_NAMESPACE + "insertBorrowRecord", borrowRecord);
	}

	@SuppressWarnings("unchecked")
	@Override
	public BorrowRecord selectBorrowByUserAndClassify(Integer userId, Integer classifyId) {
		ArrayList<BorrowRecord> list = new ArrayList<>();
		Map<String, Integer> queryMap = new HashMap<>();
		queryMap.put("userId", userId);
		queryMap.put("classifyId", classifyId);

		List objectsLists = this.getSqlSession()
				.selectList(BORROW_RECORD_NAMESPACE + "selectBorrowByUserAndClassify", queryMap);
		for (Object objectsList : objectsLists){
			list.add((BorrowRecord) objectsList);
		}
//		list = (ArrayList<BorrowRecord>) this.getSqlSession()
//				.selectList(BORROW_RECORD_NAMESPACE + "selectBorrowByUserAndClassify", queryMap);
		if (list.size() == 0) {
			return null;
		}
		return list.get(0);
	}

	@Override
	public void addBorrowNumberById(Integer id) {
		this.getSqlSession().update(BORROW_RECORD_NAMESPACE + "addBorrowNumberById", id);
	}

	@Override
	public void insertBrowseRecord(BrowseRecord browseRecord) {
		this.getSqlSession().insert(BROWSE_RECORD_NAMESPACE + "insertBrowseRecord", browseRecord);
	}

	@SuppressWarnings("unchecked")
	@Override
	public BrowseRecord selectBrowseByUserAndClassify(Integer userId, Integer classifyId) {
		ArrayList<BrowseRecord> list = new ArrayList<>();
		Map<String, Integer> queryMap = new HashMap<>();
		queryMap.put("userId", userId);
		queryMap.put("classifyId", classifyId);
//		list = (ArrayList<BrowseRecord>) this.getSqlSession()
//				.selectList(BROWSE_RECORD_NAMESPACE + "selectBrowseByUserAndClassify", queryMap);

		List objectsLists =this.getSqlSession().selectList(BROWSE_RECORD_NAMESPACE + "selectBrowseByUserAndClassify", queryMap);
		for (Object objectsList : objectsLists){
			list.add((BrowseRecord) objectsList);
		}
		if (list.size() == 0) {
			return null;
		}
		return list.get(0);
	}

	@Override
	public void addBrowseNumberById(Integer id) {
		this.getSqlSession().insert(BROWSE_RECORD_NAMESPACE + "addBrowseNumberById", id);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<BrowseRecord> selectAllBrowse() {
		return this.getSqlSession().selectList(BROWSE_RECORD_NAMESPACE + "selectAllBrowse");
	}

	@Override
	public void updateBrowseNumber(Integer id, Integer number) {
		Map<String, Integer> queryMap = new HashMap<>();
		queryMap.put("id", id);
		queryMap.put("number", number);
		this.getSqlSession().update(BROWSE_RECORD_NAMESPACE + "updateBrowseNumber", queryMap);
	}

	@Override
	public BorrowRecord selectBorrowRecordById(Integer id) {
		return (BorrowRecord) this.getSqlSession().selectOne(BORROW_RECORD_NAMESPACE + "selectBorrowRecordById", id);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<BorrowRecord> selectBorrowRecordByUserId(Integer userId) {
		return this.getSqlSession().selectList(BORROW_RECORD_NAMESPACE + "selectBorrowRecordByUserId", userId);
	}
	
}
