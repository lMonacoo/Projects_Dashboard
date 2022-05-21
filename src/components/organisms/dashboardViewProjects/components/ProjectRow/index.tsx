import { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Box,
  Collapse,
  Fab,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { useTheme } from 'styled-components';

import { useAppDispatch } from '~/hooks';
import { IProject, IUsers } from '~/interfaces';
import { removeProject, showDialogEditProject } from '~/store';
interface ProjectRowProps {
  project: IProject;
  owner: IUsers;
}

export const ProjectRow = ({ project, owner }: ProjectRowProps) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const mainContentStyles = {
    color: colors.greyQuaternary,
    fontSize: 12,
    fontWeight: 700,
    borderBottom: open ? `1px solid ${colors.transparent}` : `1px solid ${colors.greenSecondary}`
  };

  const handleDeleteProject = (project: IProject) => {
    dispatch(removeProject(project.id));
  };

  const handleEditProject = (project: IProject) => {
    dispatch(showDialogEditProject(project));
  };

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={mainContentStyles}>
          <IconButton
            aria-label='expand row'
            size='small'
            sx={{ color: colors.greenTertiary }}
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell sx={mainContentStyles}>{project.name}</TableCell>
        <TableCell sx={mainContentStyles} align='left'>
          {owner?.name || 'unknown'}
        </TableCell>
        <TableCell sx={mainContentStyles} align='center'>
          <Fab
            onClick={() => handleEditProject(project)}
            size='small'
            sx={{
              zIndex: 1,
              background: colors.greenTertiary,
              color: colors.white,
              '&:hover': { background: colors.greenSecondary }
            }}
            aria-label='edit'
          >
            <EditIcon />
          </Fab>
        </TableCell>
        <TableCell sx={mainContentStyles} align='center'>
          <Fab
            onClick={() => handleDeleteProject(project)}
            size='small'
            color='secondary'
            aria-label='delete'
            sx={{
              zIndex: 1,
              background: colors.redPrimary,
              color: colors.white,
              '&:hover': { background: colors.redPrimary, filter: 'brightness(1.5)' }
            }}
          >
            <DeleteIcon />
          </Fab>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell
          sx={{
            borderBottom: open
              ? `1px solid ${colors.greenSecondary}`
              : `1px solid ${colors.transparent}`,
            p: 0,
            pl: 10,
            m: 0
          }}
          colSpan={6}
        >
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box>
              <Typography sx={{ ...mainContentStyles, color: colors.greenTertiary, fontSize: 15 }}>
                Description:
              </Typography>
              <Typography sx={{ color: colors.greyQuaternary, fontSize: 12, pr: 3, mb: 3 }}>
                {project?.description ? project.description : 'No description'}
              </Typography>
              <Typography
                gutterBottom
                sx={{ ...mainContentStyles, color: colors.greenTertiary, fontSize: 15 }}
              >
                Owner data
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableCell>
                    <TableCell sx={{ borderBottom: `2px solid ${colors.greenTertiary}` }}>
                      ID
                    </TableCell>
                    <TableCell sx={{ borderBottom: `2px solid ${colors.greenTertiary}` }}>
                      Name
                    </TableCell>
                    <TableCell sx={{ borderBottom: `2px solid ${colors.greenTertiary}` }}>
                      Email
                    </TableCell>
                  </TableCell>
                </TableHead>
                <TableBody>
                  <TableCell>
                    <TableCell sx={mainContentStyles}>{owner?.id || 'not have owner id'}</TableCell>
                    <TableCell sx={mainContentStyles}>
                      {owner?.name || 'not have owner name'}
                    </TableCell>
                    <TableCell sx={mainContentStyles}>
                      {owner?.email || 'not have owner email'}
                    </TableCell>
                  </TableCell>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
