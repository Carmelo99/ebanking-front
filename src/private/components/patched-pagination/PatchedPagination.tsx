import { TablePagination, TablePaginationProps } from "@material-ui/core";

// neko resenje za neta za MaterialTable => Failed prop type: The prop `onChangePage` of `ForwardRef(TablePagination)
//resenje sa git-a https://github.com/mbrn/material-table/pull/2937#issuecomment-879017952
export default function PatchedPagination(props: TablePaginationProps) {
  const { ActionsComponent, onChangePage, onChangeRowsPerPage, ...tablePaginationProps } = props;

  return (
    <TablePagination
      {...tablePaginationProps}
      // @ts-expect-error onChangePage was renamed to onPageChange
      onPageChange={onChangePage}
      onRowsPerPageChange={onChangeRowsPerPage}
      ActionsComponent={(subprops) => {
        const { onPageChange, ...actionsComponentProps } = subprops;
        return (
          // @ts-expect-error ActionsComponent is provided by material-table
          <ActionsComponent {...actionsComponentProps} onChangePage={onPageChange} />
        );
      }}
    />
  );
}