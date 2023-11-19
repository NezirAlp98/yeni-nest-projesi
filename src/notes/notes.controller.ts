import { Body, Controller, Get, Post, Put, Delete, Param, Patch } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}
  @Get()
  async getNotes() {
    return this.notesService.getNotes();
  }

  @Get(':id')
  async getNote(@Param('id') id:string){
    return this.notesService.getNote(id)
  }

  @Post()
  async createNote(@Body() createNoteDto:CreateNoteDto){
    return this.notesService.insertNote(createNoteDto);
  }
  @Patch(':id')
  async updateNote(@Param('id') id:string,@Body() updateNoteDto:UpdateNoteDto){
    return this.notesService.updateNote(id,updateNoteDto)
  }

  @Delete(':id')
  async deleteNote(@Param('id') id:string){
    return this.notesService.deleteNote(id)
  }
}
