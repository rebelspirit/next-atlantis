import { useState } from 'react';
import { eq } from 'lodash';
import styles from 'components/UI/Pagination/pagination.module.scss';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { IconWrapper } from '@components/UI/IconWrapper/IconWrapper';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

const redirect = (page, router) => {
    const { push, pathname } = router;

    return push({ pathname, query: `page=${page}` });
};

const onChangePage = router => {
    return page => {
        const { push, pathname } = router;
        const queryNextPage = `page=${page.selected + 1}`;

        return push({ pathname, query: queryNextPage })
    }
};

const onKeyDownRedirectToQueryPage = (page, router) => {
    return event => {
        if (eq(event.code, 'Enter') || eq(event.code,'NumpadEnter')) {
            event.preventDefault();

            return redirect(page, router);
        }
    }
};

const onClickRedirectToQueryPage = (page, router) => {
    return () => redirect(page, router);
};

const onChangeQueryPage = (setState, totalPages) => {
    return event => {
        if (event.target.value <= totalPages && event.target.value > 0) {
            return setState(event.target.value)
        }
        return setState('');
    }
};

export const Pagination = ({ page, totalPages }) => {
    const router = useRouter();
    const [queryPage, setQueryPage] = useState('');

    return (
        <div className={styles.paginationContainer}>
            <ReactPaginate
                containerClassName={styles.pagination}
                nextLabel={
                    <IconWrapper width={30} height={30}>
                        <IoIosArrowRoundForward/>
                    </IconWrapper>
                }
                previousLabel={
                    <IconWrapper width={30} height={30}>
                        <IoIosArrowRoundBack/>
                    </IconWrapper>
                }
                pageClassName={cx(styles.item, styles.pageButton)}
                pageLinkClassName={styles.link}
                previousClassName={cx(styles.item, styles.scrollButtons)}
                previousLinkClassName={styles.link}
                nextClassName={cx(styles.item, styles.scrollButtons)}
                nextLinkClassName={styles.link}
                breakLabel="..."
                breakClassName={cx(styles.item, styles.breakButton)}
                breakLinkClassName={styles.link}
                activeClassName={styles.selected}
                disabledClassName={styles.disabled}
                forcePage={page - 1}
                pageCount={totalPages}
                marginPagesDisplayed={1}
                pageRangeDisplayed={6}
                onPageChange={onChangePage(router)}
                renderOnZeroPageCount={null}
            />
            <div className={styles.selectPageContainer}>
                <p>Перейти</p>
                <input
                    type='number'
                    className={styles.selectPageInput}
                    value={queryPage}
                    onChange={onChangeQueryPage(setQueryPage, totalPages)}
                    onKeyDown={onKeyDownRedirectToQueryPage(queryPage, router)}
                />
                <p>стр.</p>

                <div className={styles.selectPageButtonContainer}
                     onClick={onClickRedirectToQueryPage(queryPage, router)}
                >
                    <div className={styles.selectPageButtonIcon}>
                        <IconWrapper width={30} height={30}>
                            <IoIosArrowRoundForward/>
                        </IconWrapper>
                    </div>
                </div>
            </div>
        </div>
    )
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
};
